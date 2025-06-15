// const express = require("express");
// const router = express();
// const { Sequelize, DataTypes } = require("sequelize");

// // Update the database URI and initialize Sequelize
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "ghi.db"
// });

// // Define the Investor model
// const Investor = sequelize.define('Investor', {
//     investor_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     investor_name: {
//       type: DataTypes.STRING(80),
//       allowNull: false
//     },
//     first_name: DataTypes.STRING(80),
//     middle_name: DataTypes.STRING(80),
//     last_name: DataTypes.STRING(80),
//     email1: DataTypes.STRING(120),
//     email2: DataTypes.STRING(120),
//     phone_number: DataTypes.STRING(20),
//     is_llc: DataTypes.BOOLEAN,
//     company_name: DataTypes.STRING(120),
//     address1: DataTypes.STRING(120),
//     address2: DataTypes.STRING(120),
//     city: DataTypes.STRING(80),
//     state: DataTypes.STRING(80),
//     zip: DataTypes.STRING(20),
//     country: DataTypes.STRING(80)
//   });
  
//   // Define the Property model
//   const Property = sequelize.define('Property', {
//     property_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     address: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     city: DataTypes.STRING(50),
//     zip: DataTypes.STRING(20),
//     country: DataTypes.STRING(50),
//     buy_date: DataTypes.DATE,
//     sell_date: DataTypes.DATE,
//     llc_name: DataTypes.STRING(100),
//     total_investment: DataTypes.DECIMAL(12, 2)
//   });
  
//   // Define the Investment model
//   const Investment = sequelize.define('Investment', {
//     investment_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     principle: DataTypes.DECIMAL(12, 2),
//     profit: DataTypes.DECIMAL(12, 2)
//   });
  
//   // Define the Transaction model
//   const Transaction = sequelize.define('Transaction', {
//     transaction_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     amount: DataTypes.DECIMAL(12, 2),
//     transaction_type: DataTypes.STRING(20),
//     transaction_date: DataTypes.DATE,
//     profit_or_principle: DataTypes.STRING(20),
//     method_of_payment: DataTypes.STRING(50)
//   });
  
//   // Define associations
// //   Investor.hasMany(Investment, { foreignKey: 'investor_id' });
// //   Property.hasMany(Investment, { foreignKey: 'property_id' });
// //   Investment.belongsTo(Investor, { foreignKey: 'investor_id' });
// //   Investment.belongsTo(Property, { foreignKey: 'property_id' });
// //   Investment.hasMany(Transaction, { foreignKey: 'investment_id' });
// //   Transaction.belongsTo(Investment, { foreignKey: 'investment_id' });
// //   Transaction.belongsTo(Property, { foreignKey: 'from_property_id' });

// Investor.hasMany(Investment, { foreignKey: 'investor_id' });
// Property.hasMany(Investment, { foreignKey: 'property_id' });
// Investment.belongsTo(Investor, { foreignKey: 'investor_id' });
// Investment.belongsTo(Property, { foreignKey: 'property_id' });
// Investment.hasMany(Transaction, { foreignKey: 'investment_id' });
// Transaction.belongsTo(Investment, { foreignKey: 'investment_id' });
// Transaction.belongsTo(Property, { foreignKey: 'from_property_id' });


//   // Add Investor
// router.post('/add_investor', async (req, res) => {
//     try {
//       const investor = await Investor.create(req.body);
//       res.status(201).json(investor);
//     } catch (err) {
//       console.log("lsjflsdjfljsdlfjldsjfkldslfsdl")
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add investor' });
//     }
//   });
  
//   // Add Property
//   router.post('/add_property', async (req, res) => {
//     try {
//       const property = await Property.create(req.body);
//       res.status(201).json(property);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add property' });
//     }
//   });
  
//   // Add Investment
//   router.post('/add_investment', async (req, res) => {
//     try {
//       const investment = await Investment.create(req.body);
//       res.status(201).json(investment);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add investment' });
//     }
//   });
  
//   // Add Transaction
//   router.post('/add_transaction', async (req, res) => {
//     try {
//       const transaction = await Transaction.create(req.body);
//       res.status(201).json(transaction);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to add transaction' });
//     }
//   });

//   // Get Investors
//   router.get('/get_investors', async (req, res) => {
//     try {
//       const investorsQuery = await Investor.findAll();
//       // Extracting data values from each investor instance
//       const investors = investorsQuery.map(investor => investor.toJSON());
//       console.log(investors);
//       res.json(investors);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch investors' });
//     }
//   });
  
  
//   // Get Properties
//   router.get('/get_properties', async (req, res) => {
//     try {
//         const propertiesQuery = await Property.findAll();
//         const properties = propertiesQuery.map(property => property.toJSON());
//         res.json(properties);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch properties' });
//     }
//   });
  
//   // Get Investments
// //   router.get('/get_investments', async (req, res) => {
// //     try {
// //       const investmentsQuery = await Investment.findAll();
// //       const investments = investmentsQuery.map(investment => investment.toJSON());
// //       console.log(investments);
// //       res.json(investments);
// //     } catch (err) {
// //       console.error(err);
// //       res.status(500).json({ error: 'Failed to fetch investments' });
// //     }
// //   });

// router.get('/get_investments', async (req, res) => {
//     try {
//       const investmentsQuery = await Investment.findAll({
//         include: [
//           { 
//             model: Investor,
//             attributes: ['investor_id', 'investor_name']
//           },
//           {
//             model: Property,
//             attributes: ['property_id', 'address', 'city', 'zip', 'country']
//           }
//         ]
//       });
//       const investments = investmentsQuery.map(investment => investment.toJSON());
//       console.log(investments);
//       res.json(investments);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch investments' });
//     }
//   });
  
  
//   // Get Transactions
//   router.get('/get_transactions', async (req, res) => {
//     try {
//       const transactions = await Transaction.findAll();
//       res.json(transactions);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch transactions' });
//     }
//   });
  
//   // Get Transactions and Investments associated with a particular investor by full name
//   router.get('/get_investor_data/:investor_name', async (req, res) => {
//     try {
//       const fullName = req.params.investor_name;
//       console.log("fullName_sdlfjldsjflsdlfdlslfj")
//       console.log(fullName)
//       const investor = await Investor.findOne({
//         where: {
//           investor_name: fullName // Assuming you have a full_name attribute in Investor
//         },
//         // include: [
//         //   { 
//         //     model: Investment,
//         //     include: [Transaction] // Include Transaction model under Investment
//         //   }
//         // ]
//         // include: [
//         //     { 
//         //       model: Investment,
//         //       include: [Property] // Include Property model under Investment
//         //     },
//         //     { 
//         //       model: Transaction, 
//         //       include: [Property] // Include Property model under Transaction
//         //     }
//         //   ]
//         // include: [
//         //     { 
//         //       model: Investment,
//         //       include: [Property, Transaction] // Include Property and Transaction models under Investment
//         //     }
//         // ]
//         include: [
//             { 
//               model: Investment,
//               include: [
//                 { model: Property },
//                 { model: Transaction, include: [Property] } // Include Property model under Transaction
//               ]
//             }
//           ]
//         // include: [
//         //     { 
//         //       model: Investment,
//         //       include: [
//         //        {
//         //         model: [Transaction], 
//         //         include: Property
//         //        }
//         //       ]
//         //     }
//         // ]
//         // include: [
//         //     { 
//         //       model: Investment,
//         //       include: [
//         //         { 
//         //           model: Transaction, 
//         //           include: [Property] // Include Property model under Transaction
//         //         }
//         //       ]
//         //     }
//         // ]
//       });
//       if (!investor) {
//         res.status(404).json({ error: 'Investor not found' });
//       } else {
//         console.log("investoringgggggaa");
//         console.log(investor.toJSON());
//         investor.toJSON().Investments.forEach(investment => {
//             console.log('Investment ID:', investment.investment_id);
//             console.log('Principle:', investment.principle);
//             console.log('Profit:', investment.profit);
//             console.log('Transactions:');
//             investment.Transactions.forEach(transaction => {
//                 console.log(transaction);
//             });
//           });
//         res.json(investor.toJSON());
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch investor information' });
//     }
//   }); 
  
//        // console.log("investoringgggggaa");
//         // console.log(investor.toJSON());
//         // investor.toJSON().Investments.forEach(investment => {
//         //     console.log('Investment ID:', investment.investment_id);
//         //     console.log('Principle:', investment.principle);
//         //     console.log('Profit:', investment.profit);
//         //     console.log('Transactions:');
//         //     investment.Transactions.forEach(transaction => {
//         //       console.log('Transaction ID:', transaction.transaction_id);
//         //       console.log('Amount:', transaction.amount);
//         //       console.log('Transaction Type:', transaction.transaction_type);
//         //       console.log('Transaction Date:', transaction.transaction_date);
//         //       console.log('Profit or Principle:', transaction.profit_or_principle);
//         //       console.log('Method of Payment:', transaction.method_of_payment);
//         //     });
//         //   });

//   // Synchronize models with database and start server
//     (async () => {
//         try {
//         await sequelize.sync();
//         // router.listen(5000, () => {
//         //   console.log("Server is running on port 5000");
//         // });
//         } catch (error) {
//         console.error("Unable to connect to the database:", error);
//         }
//     })();

//     module.exports = router;


// New Code:

const express = require("express");
const router = express();
const { Sequelize, DataTypes } = require("sequelize");

// Update the database URI and initialize Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "ghi.db"
});

// Define the Investor model
const Investor = sequelize.define('Investor', {
  investor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  investor_name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
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

// Define the Property model
const Property = sequelize.define('Property', {
  property_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  city: DataTypes.STRING(50),
  zip: DataTypes.STRING(20),
  country: DataTypes.STRING(50),
  buy_date: DataTypes.DATE,
  sell_date: DataTypes.DATE,
  llc_name: DataTypes.STRING(100),
  total_investment: DataTypes.DECIMAL(12, 2)
});

// Define the Investment model
const Investment = sequelize.define('Investment', {
  investment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  principle: DataTypes.DECIMAL(12, 2),
  profit: DataTypes.DECIMAL(12, 2)
});

// Define the Transaction model
const Transaction = sequelize.define('Transaction', {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: DataTypes.DECIMAL(12, 2),
  transaction_type: DataTypes.STRING(20),
  transaction_date: DataTypes.DATE,
  profit_or_principle: DataTypes.STRING(20),
  method_of_payment: DataTypes.STRING(50)
});

// Define associations
Investor.hasMany(Investment, { foreignKey: 'investor_id' });
Property.hasMany(Investment, { foreignKey: 'property_id' });
Investment.belongsTo(Investor, { foreignKey: 'investor_id' });
Investment.belongsTo(Property, { foreignKey: 'property_id' });
Investment.hasMany(Transaction, { foreignKey: 'investment_id' });
Transaction.belongsTo(Investment, { foreignKey: 'investment_id' });
Transaction.belongsTo(Property, { as: 'from_property', foreignKey: 'from_property_id' });
Transaction.belongsTo(Property, { as: 'to_property', foreignKey: 'to_property_id' });

// Add Investor
router.post('/add_investor', async (req, res) => {
  try {
    const investor = await Investor.create(req.body);
    res.status(201).json(investor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add investor' });
  }
});

// Add Property
router.post('/add_property', async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add property' });
  }
});

// Add Investment
router.post('/add_investment', async (req, res) => {
  try {
    const investment = await Investment.create(req.body);
    res.status(201).json(investment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add investment' });
  }
});

// Add Transaction
router.post('/add_transaction', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add transaction' });
  }
});

// Get Investors
router.get('/get_investors', async (req, res) => {
  try {
    const investorsQuery = await Investor.findAll();
    const investors = investorsQuery.map(investor => investor.toJSON());
    console.log(investors);
    res.json(investors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch investors' });
  }
});

// Get Properties
router.get('/get_properties', async (req, res) => {
  try {
    const propertiesQuery = await Property.findAll();
    const properties = propertiesQuery.map(property => property.toJSON());
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Get Investments
router.get('/get_investments', async (req, res) => {
  try {
    const investmentsQuery = await Investment.findAll({
      include: [
        { 
          model: Investor,
          attributes: ['investor_id', 'investor_name']
        },
        {
          model: Property,
          attributes: ['property_id', 'address', 'city', 'zip', 'country']
        }
      ]
    });
    const investments = investmentsQuery.map(investment => investment.toJSON());
    console.log(investments);
    res.json(investments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch investments' });
  }
});

// Get Transactions
router.get('/get_transactions', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Get Transactions and Investments associated with a particular investor by full name
router.get('/get_investor_data/:investor_name', async (req, res) => {
  try {
    const fullName = req.params.investor_name;
    console.log("fullName_sdlfjldsjflsdlfdlslfj")
    console.log(fullName)
    const investor = await Investor.findOne({
      where: {
        investor_name: fullName
      },
      include: [
        { 
          model: Investment,
          include: [
            { model: Property },
            { 
              model: Transaction, 
              include: [
                { model: Property, as: 'from_property' },
                { model: Property, as: 'to_property' }
              ]
            }
          ]
        }
      ]
    });
    if (!investor) {
      res.status(404).json({ error: 'Investor not found' });
    } else {
      console.log("investoringgggggaa");
      const investorData = investor.toJSON();
      investorData.Investments.forEach(investment => {
        investment.Transactions.forEach(transaction => {
          if (!transaction.to_property_id) {
            transaction.transaction_type = "Return of Profit";
          }
        });
      });
      res.json(investorData);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch investor information' });
  }
});

router.get('/search_investors', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const investors = await Investor.findAll({
      where: {
        investor_name: {
          [Sequelize.Op.like]: `%${query}%`
        }
      },
      attributes: ['investor_name']
    });

    res.json(investors.map(investor => investor.investor_name));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to search investors' });
  }
});

// Synchronize models with database and start server
(async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = router;