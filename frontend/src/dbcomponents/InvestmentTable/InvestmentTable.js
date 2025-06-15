// import React from 'react';

// const InvestmentTable = ({ investments }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Investment ID</th>
//           <th>Principle</th>
//           <th>Profit</th>
//           <th>Property Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {investments.map((investment) => (
//           <InvestmentRow key={investment.investment_id} investment={investment} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const InvestmentRow = ({ investment }) => {
//   return (
//     <tr>
//       <td>{investment.investment_id}</td>
//       <td>{investment['investment principle']}</td>
//       <td>{investment['investment profit']}</td>
//       <td>{investment.property_name}</td>
//     </tr>
//   );
// };

// const TransactionTable = ({ transactions }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Transaction ID</th>
//           <th>Amount</th>
//           <th>Combined Rollover</th>
//           <th>From Property Name</th>
//           <th>Transaction Type</th>
//           <th>Transaction Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map((transaction) => (
//           <TransactionRow key={transaction.transaction_id} transaction={transaction} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const TransactionRow = ({ transaction }) => {
//   return (
//     <tr>
//       <td>{transaction.transaction_id}</td>
//       <td>{transaction.amount}</td>
//       <td>{transaction.is_Combined_rollover}</td>
//       <td>{transaction.from_property_name}</td>
//       <td>{transaction.transaction_type}</td>
//       <td>{transaction.transaction_date}</td>
//     </tr>
//   );
// };

// export { InvestmentTable, TransactionTable };

// import React from 'react';
// import './TableStyles.css'; // Import your CSS file

// const InvestmentTable = ({ investments }) => {
//   console.log(investments);
//   return (
//     <table className="styled-table">
//       <thead>
//         <tr>
//           <th>Investment ID</th>
//           <th>Principle</th>
//           <th>Profit</th>
//           <th>Property Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {investments.map((investment) => (
//           <InvestmentRow key={investment.investment_id} investment={investment} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const InvestmentRow = ({ investment }) => {
//   return (
//     <tr>
//       <td>{investment.investment_id}</td>
//       <td>{investment.principle}</td>
//       <td>{investment.profit}</td>
//       <td>{investment.Property.address}</td>
//     </tr>
//   );
// };

// const TransactionTable = ({ transactions }) => {
//   console.log(transactions);
//   return (
//     <table className="styled-table">
//       <thead>
//         <tr>
//           <th>Transaction ID</th>
//           <th>Amount</th>
//           {/* <th>Combined Rollover</th> */}
//           <th>Profit or Principle</th>
//           <th>From Property Name</th>
//           <th>Transaction Type</th>
//           <th>Transaction Date</th>
//           <th>Method of Payment</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {transactions.map((transaction) => (
//           <TransactionRow key={transaction.transaction_id} transaction={transaction} />
//         ))} */}
//         {transactions.map((transactionArray, index) => (
//           /* Iterate over each transaction within the array */
//           transactionArray.map(transaction => (
//             <TransactionRow key={index + '-' + transaction.transaction_id} transaction={transaction} />
//           ))
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const TransactionRow = ({ transaction }) => {
//   return (
//     <tr>
//       <td>{transaction.transaction_id}</td>
//       <td>{transaction.amount}</td>
//       {/* <td>{transaction.is_Combined_rollover}</td> */}
//       <td>{transaction.principle_or_profit}</td>
//       <td>{transaction.Property.address}</td>
//       <td>{transaction.transaction_type}</td>
//       <td>{transaction.transaction_date}</td>
//       <td>{transaction.method_of_payment}</td>
//     </tr>
//   );
// };

// export { InvestmentTable, TransactionTable };

import React from 'react';
import './TableStyles.css'; // Import your CSS file

const InvestmentTable = ({ investments }) => {
  console.log(investments);
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Investment ID</th>
          <th>Principle</th>
          <th>Profit</th>
          <th>Property Name</th>
        </tr>
      </thead>
      <tbody>
        {investments.map((investment) => (
          <InvestmentRow key={investment.investment_id} investment={investment} />
        ))}
      </tbody>
    </table>
  );
};

const InvestmentRow = ({ investment }) => {
  return (
    <tr>
      <td>{investment.investment_id}</td>
      <td>{investment.principle}</td>
      <td>{investment.profit}</td>
      <td>{investment.Property.address}</td>
    </tr>
  );
};

const TransactionTable = ({ transactions }) => {
  console.log(transactions);
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Amount</th>
          <th>Profit or Principle</th>
          <th>From Property Name</th>
          <th>To Property Name</th>
          <th>Transaction Type</th>
          <th>Transaction Date</th>
          <th>Method of Payment</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transactionArray, index) => (
          transactionArray.map(transaction => (
            <TransactionRow key={index + '-' + transaction.transaction_id} transaction={transaction} />
          ))
        ))}
      </tbody>
    </table>
  );
};

const TransactionRow = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.transaction_id}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.principle_or_profit}</td>
      <td>{transaction.from_property ? transaction.from_property.address : 'N/A'}</td>
      <td>{transaction.to_property ? transaction.to_property.address : 'N/A'}</td> {/* Add this column */}
      <td>{transaction.transaction_type}</td>
      <td>{transaction.transaction_date}</td>
      <td>{transaction.method_of_payment}</td>
    </tr>
  );
};

export { InvestmentTable, TransactionTable };