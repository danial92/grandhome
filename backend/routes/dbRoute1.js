const express = require("express");
const router = express();
const { Sequelize, DataTypes } = require("sequelize");

// Update the database URI and initialize Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "ghi.db"
});

// Define models
const Investor = sequelize.define("Investor", {
  investor_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  investor_name: { type: DataTypes.STRING(80), allowNull: false },
  first_name: DataTypes.STRING(80),
  middle_name: DataTypes.STRING(80),
  last_name: DataTypes.STRING(80),
  email1: DataTypes.STRING(120),
  email2: DataTypes.STRING(120),
  phone_number: DataTypes.STRING(20),
  is_llc: DataTypes.BOOLEAN,
  company_name: DataTypes.STRING(120),
  address1: DataTypes.STRING(120),
  address2: DataTypes.STRING(120),
  city: DataTypes.STRING(80),
  state: DataTypes.STRING(80),
  zip: DataTypes.STRING(20),
  country: DataTypes.STRING(80)
});

const Property = sequelize.define("Property", {
  property_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  address: { type: DataTypes.STRING(255), allowNull: false },
  city: DataTypes.STRING(50),
  zip: DataTypes.STRING(20),
  country: DataTypes.STRING(50),
  buy_date: DataTypes.DATE,
  sell_date: DataTypes.DATE,
  llc_name: DataTypes.STRING(100),
  total_investment: DataTypes.DECIMAL(12, 2)
});

const Investment = sequelize.define("Investment", {
  investment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  principle: DataTypes.DECIMAL(12, 2),
  profit: DataTypes.DECIMAL(12, 2)
});

const Transaction = sequelize.define("Transaction", {
  transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: DataTypes.DECIMAL(12, 2),
  transaction_type: DataTypes.STRING(20),
  transaction_date: DataTypes.DATE,
  profit_or_principle: DataTypes.STRING(20),
  method_of_payment: DataTypes.STRING(50)
});


// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);
// Property.hasMany(Investment);
// Investment.belongsTo(Property);
// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investor);
// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });
// Property.belongsTo(Investor, { foreignKey: 'investor_id' });

Investor.hasMany(Property);
Property.belongsTo(Investor);
Property.hasMany(Investment);
Investment.belongsTo(Property);
Investment.hasMany(Transaction);
Transaction.belongsTo(Investment);
Investor.hasMany(Investment);
Investment.belongsTo(Investor);
Property.belongsTo(Investor, { foreignKey: 'investor_id' });

// Define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// // Investor.hasMany(Transaction); // Add this association
// Investor.hasMany(Transaction, { foreignKey: 'investor_id' });
// Transaction.belongsTo(Investor, { foreignKey: 'investor_id' });

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });
// Transaction.belongsTo(Property); // Add this association

// // Define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Investor.hasMany(Transaction);

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });

// Define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Investor.hasMany(Transaction);

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });

// define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });

// define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });

// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Investment.belongsTo(Property);
// Property.hasMany(Investment);

// Define associations
// Investor.hasMany(Investment);
// Investment.belongsTo(Investor);

// Property.hasMany(Investment);
// Investment.belongsTo(Property);

// Investment.hasMany(Transaction);
// Transaction.belongsTo(Investment);

// Investor.hasMany(Transaction, { foreignKey: 'investor_id' }); // Updated association
// Transaction.belongsTo(Investor, { foreignKey: 'investor_id' }); // Updated association

// Property.hasMany(Transaction, { foreignKey: 'from_property_id' });
// Transaction.belongsTo(Property, { foreignKey: 'from_property_id' });

// Define routes
router.post("/add_investor", async (req, res) => {
  try {
    const data = req.body;
    const newInvestor = await Investor.create(data);
    res.json({ message: "Investor added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_investors", async (req, res) => {
  try {
    const investors = await Investor.findAll();
    // console.log(investors);
    // const investorsData = investors.map(investor => investor.dataValues);
    const investorsData = investors.map(investor => ({
      investor_id: investor.dataValues.investor_id,
      investor_name: investor.dataValues.investor_name
    }));
    // console.log(investorsData)
    // const investorsData = investors.map(investor => ({
    //   investor_id: investor.investor_id,
    //   investor_name: investor.investor_name
    // }));
    res.json({ investors: investorsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_investor/:investor_name", async (req, res) => {
  try {
    const investor_name = req.params.investor_name;
    const investor = await Investor.findOne({ where: { investor_name } });
    if (investor) {
      res.json(investor);
    } else {
      res.status(404).json({ message: "Investor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add_property", async (req, res) => {
  try {
    const data = req.body;
    const newProperty = await Property.create(data);
    res.json({ message: "Property added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_properties", async (req, res) => {
  try {
    const properties = await Property.findAll();
    const propertiesData = properties.map(property => ({
      property_id: property.dataValues.property_id,
      address: property.dataValues.address,
      city: property.dataValues.city,
      zip: property.dataValues.zip,
      country: property.dataValues.country
    }));
    res.json({ properties: propertiesData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add_investment", async (req, res) => {
  try {
    const data = req.body;
    const newInvestment = await Investment.create(data);
    res.json({ message: "Investment added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add_transaction", async (req, res) => {
  try {
    const data = req.body;
    const newTransaction = await Transaction.create(data);
    res.json({ message: "Transaction added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.get("/get_investments", async (req, res) => {
//   try {
//     const investments = await Investment.findAll({ include: [Investor, Property] });
//     console.log(investments)
//     const investmentsData = investments.map(investment => ({
//       investment_id: investment.investment_id,
//       investor: {
//         investor_id: investment.Investor.investor_id,
//         investor_name: investment.Investor.investor_name
//       },
//       property: {
//         property_id: investment.Property.property_id,
//         address: investment.Property.address,
//         city: investment.Property.city,
//         zip: investment.Property.zip,
//         country: investment.Property.country
//       },
//       principle: investment.principle,
//       profit: investment.profit
//     }));
//     res.json({ investments: investmentsData });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get("/get_investments", async (req, res) => {
  try {
    const investments = await Investment.findAll({ include: [{ model: Investor }, { model: Property }] });
    const investmentsData = investments.map(investment => ({
      investment_id: investment.investment_id,
      investor: {
        investor_id: investment.Investor ? investment.Investor.investor_id : null,
        investor_name: investment.Investor ? investment.Investor.investor_name : null
      },
      property: {
        property_id: investment.Property ? investment.Property.property_id : null,
        address: investment.Property ? investment.Property.address : null,
        city: investment.Property ? investment.Property.city : null,
        zip: investment.Property ? investment.Property.zip : null,
        country: investment.Property ? investment.Property.country : null
      },
      principle: investment.principle,
      profit: investment.profit
    }));
    res.json({ investments: investmentsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   try {
//     const investor_name = decodeURIComponent(req.params.investor_name);
//     const investor = await Investor.findOne({ where: { investor_name } });
//     if (investor) {
//       const investments = await Investment.findAll({ where: { investor_id: investor.investor_id } });
//       const transactions = await Transaction.findAll({ where: { from_property_id: investor.investor_id } });
//       const investmentData = investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.Property.address
//       }));
//       const transactionData = transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.Property.address,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));
//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   console.log(req.params.investor_name)
//   console.log(typeof(req.params.investor_name))
//   try {
//     // console.log("req.params.investor_name")
//     // console.log(req.params.investor_name)
//     // const investor_name = decodeURIComponent(req.params.investor_name);
//     const investor_name = req.params.investor_name;
//     // console.log("investor_name")
//     // console.log(typeof(investor_name))
//     const investor = await Investor.findOne({ 
//       where: { investor_name },
//       include: [{ model: Investment, include: Property }, Transaction]
//       // include: [{ model: Investment }, { model: Property }, { model: Transaction }]
//     });
//     console.log("investor");
//     console.log(investor);
//     // res.status.json({ investor: investor })
//     if (investor) {
//       const investmentData = investor.Investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.Property ? investment.Property.address : null
//       }));
//       const transactionData = investor.Transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.Property ? transaction.Property.address : null,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));
//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     console.error("Error finding investor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   try {
//     const investor_name = req.params.investor_name;
//     const investor = await Investor.findOne({ 
//       where: { investor_name },
//       include: [{ model: Investment, include: Property }, { model: Transaction, include: Property }]
//     });

//     if (investor) {
//       const investmentData = investor.Investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.Property ? investment.Property.address : null
//       }));

//       const transactionData = investor.Transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.Property ? transaction.Property.address : null,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));

//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     console.error("Error finding investor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   try {
//     const investor_name = req.params.investor_name;
//     const investor = await Investor.findOne({ 
//       where: { investor_name },
//       include: [{ 
//         model: Investment, 
//         include: Property // Include Property model within Investment model
//       }, 
//       Transaction // Include Transaction model
//       ]
//     });
//     if (investor) {
//       // Access investor's investments and transactions
//       const investmentData = investor.investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.property ? investment.property.address : null
//       }));
//       const transactionData = investor.transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.property ? transaction.property.address : null,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));
//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     console.error("Error finding investor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   try {
//     const investor_name = req.params.investor_name;
//     const investor = await Investor.findOne({ 
//       where: { investor_name },
//       include: [{ 
//         model: Investment, 
//         include: Property // Include Property model within Investment model
//       }, 
//       { 
//         model: Transaction,
//         include: Property // Include Property model within Transaction model
//       }]
//     });
//     if (investor) {
//       // Access investor's investments and transactions
//       const investmentData = investor.investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.property ? investment.property.address : null
//       }));
//       const transactionData = investor.transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.property ? transaction.property.address : null,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));
//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     console.error("Error finding investor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/get_investor_data/:investor_name", async (req, res) => {
//   try {
//     const investor_name = req.params.investor_name;
//     const investor = await Investor.findOne({ 
//       where: { investor_name },
//       include: [{ 
//         model: Investment, 
//         include: Property // Include Property model within Investment model
//       }, 
//       { 
//         model: Transaction,
//         include: Property // Include Property model within Transaction model
//       }]
//     });
//     if (investor) {
//       // Access investor's investments and transactions
//       const investmentData = investor.investments.map(investment => ({
//         investment_id: investment.investment_id,
//         investment_principle: investment.principle,
//         investment_profit: investment.profit,
//         property_name: investment.property ? investment.property.address : null
//       }));
//       const transactionData = investor.transactions.map(transaction => ({
//         transaction_id: transaction.transaction_id,
//         amount: transaction.amount,
//         Principle_or_Profit: transaction.profit_or_principle,
//         from_property_name: transaction.property ? transaction.property.address : null,
//         transaction_type: transaction.transaction_type,
//         method_of_payment: transaction.method_of_payment,
//         transaction_date: transaction.transaction_date
//       }));
//       res.json({ investor_name, investments: investmentData, transactions: transactionData });
//     } else {
//       res.status(404).json({ message: "Investor not found" });
//     }
//   } catch (error) {
//     console.log("error hoga")
//     console.error("Error finding investor:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/get_investor_data', async (req, res) => {
//   // console.log(investorName)
//   // console.log(typeof(investorName))
//   try {
//     const investorName = req.query.investor_name; // Assuming the investor name is provided as a query parameter
//     // Find the investor by name
//     const investor = await Investor.findOne({
//       where: { investor_name: investorName },
//       include: [
//         { model: Investment, include: [Transaction, Property] }
//       ]
//     });

//     console.log("investor")
//     console.log(investor)

//     if (!investor) {
//       return res.status(404).json({ error: 'Investor not found' });
//     }

//     // print("investor")
//     // print(investor)

//     // Send the investor data with associated investments, transactions, and properties
//     res.json(investor);
//   } catch (error) {
//     console.error('Error fetching investor data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

router.get('/get_investor_data', async (req, res) => {
  try {
    const investorName = req.query.investor_name;
    const investor = await Investor.findOne({
        where: { investor_name: investorName },
        include: [
            { model: Investment, include: [Transaction] },
            { model: Property, include: [Investment] }
        ]
    });

    if (!investor) {
        return res.status(404).json({ message: 'Investor not found' });
    }

    res.json({ investor });
  } catch (error) {
      console.error('Error retrieving investor data:', error);
      res.status(500).json({ message: 'Internal server error' });
  }

  // try {
  //   const investorName = req.query.investor_name;
  //   console.log(investorName);
  //   // Find the investor by name
  //   const investor = await Investor.findOne({
  //     where: { investor_name: investorName },
  //     include: [
  //       { model: Investment, include: Transaction },
  //       Property
  //     ]
  //   });

  //   if (!investor) {
  //     return res.status(404).json({ error: 'Investor not found' });
  //   }

  //   // Send the investor data along with associated investments and transactions
  //   res.json(investor);
  // } catch (error) {
  //   console.error('Error retrieving investor data:', error);
  //   res.status(500).json({ error: 'Internal server error' });
  // }
});

// Synchronize models with database and start server
(async () => {
  try {
    await sequelize.sync();
    // router.listen(5000, () => {
    //   console.log("Server is running on port 5000");
    // });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = router;