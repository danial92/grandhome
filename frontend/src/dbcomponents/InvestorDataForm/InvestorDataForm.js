// import React from 'react';
// import { InvestmentTable, TransactionTable } from '../InvestmentTable/InvestmentTable';

// const InvestorDataForm = ({ onSubmit, onReset, formData, setFormData, data }) => {
//   const { investor_name } = formData || {};

//   console.log(data ? data : null);

//   const handleChange = (field, value) => {
//     setFormData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   return (
//     <div>
//       <h2>Get Investor Data</h2>
//       <form onSubmit={onSubmit}>
//         <div className='investor_data_form_div'>
//             <label>
//               Investor Name:
//               {/* <input type="number" value={investor_id} onChange={(e) => formData.investor_id = parseInt(e.target.value)} /> */}
//               <input
//                 type="text"
//                 value={investor_name ?? ''}
//                 onChange={(e) => handleChange('investor_name', e.target.value)}
//               />
//             </label>
//             <button type="submit">Get Data</button>
//         </div>
//         {/* <button type="button" onClick={onReset}>Reset</button> */}
//       </form>
//       {
//         data ?
//         <div className='investor_data_div'>
//             <h1>{data.investor_name}</h1>
//             <h2>Investments</h2>
//             <InvestmentTable investments={data.Investments} />
//             <h2>Transactions</h2>
//             <TransactionTable transactions={data.Investments.map(investment => investment.Transactions)} />
//         </div>
//         : null
//       }
//     </div>
//   );
// };

// export default InvestorDataForm;

// import React from 'react';
// import { InvestmentTable, TransactionTable } from '../InvestmentTable/InvestmentTable';

// const InvestorDataForm = ({ onSubmit, onReset, formData, setFormData, data }) => {
//   const { investor_name } = formData || {};

//   console.log(data ? data : null);

//   const handleChange = (field, value) => {
//     setFormData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   return (
//     <div>
//       <h2>Get Investor Data</h2>
//       <form onSubmit={onSubmit}>
//         <div className='investor_data_form_div'>
//           <label>
//             Investor Name:
//             <input
//               type="text"
//               value={investor_name ?? ''}
//               onChange={(e) => handleChange('investor_name', e.target.value)}
//             />
//           </label>
//           <button type="submit">Get Data</button>
//         </div>
//       </form>
//       {
//         data ?
//         <div className='investor_data_div'>
//           <h1>{data.investor_name}</h1>
//           <h2>Investments</h2>
//           <InvestmentTable investments={data.Investments} />
//           <h2>Transactions</h2>
//           <TransactionTable transactions={data.Investments.map(investment => investment.Transactions)} />
//         </div>
//         : null
//       }
//     </div>
//   );
// };

// export default InvestorDataForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InvestmentTable, TransactionTable } from '../InvestmentTable/InvestmentTable';

const InvestorDataForm = ({ onSubmit, onReset, formData, setFormData, data }) => {
  const { investor_name } = formData || {};
  const [investorOptions, setInvestorOptions] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const fetchInvestorOptions = async (query) => {
    if (query.length === 0) {
      setInvestorOptions([]);
      return;
    }

    try {
      const response = await axios.get('/search_investors', {
        params: { query }
      });
      setInvestorOptions(response.data);
    } catch (error) {
      console.error('Error fetching investor options:', error);
    }
  };

  useEffect(() => {
    fetchInvestorOptions(investor_name || '');
  }, [investor_name]);

  return (
    <div>
      <h2>Get Investor Data</h2>
      <form onSubmit={onSubmit}>
        <div className='investor_data_form_div'>
          <label>
            Investor Name:
            <input
              type="text"
              value={investor_name ?? ''}
              onChange={(e) => handleChange('investor_name', e.target.value)}
              list="investor-options"
            />
            <datalist id="investor-options">
              {investorOptions.map((name, index) => (
                <option key={index} value={name} />
              ))}
            </datalist>
          </label>
          <button type="submit">Get Data</button>
        </div>
      </form>
      {data ? (
        <div className='investor_data_div'>
          <h1>{data.investor_name}</h1>
          <h2>Investments</h2>
          <InvestmentTable investments={data.Investments} />
          <h2>Transactions</h2>
          <TransactionTable transactions={data.Investments.map(investment => investment.Transactions)} />
        </div>
      ) : null}
    </div>
  );
};

export default InvestorDataForm;