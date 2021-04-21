const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.json({ error: "Login is required to access this resource!" })
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_CODE, (err, payload) => {
        if(err) {
            return res.json({ error: "Login is required to access this resource!" })
        }

        const { _id } = payload;
        User.findById(_id)
        .then(userdata => {
            req.user = userdata;
            next();
        })
    })
}