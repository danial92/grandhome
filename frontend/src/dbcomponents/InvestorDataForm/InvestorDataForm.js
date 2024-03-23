import React from 'react';
import { InvestmentTable, TransactionTable } from '../InvestmentTable/InvestmentTable';

const InvestorDataForm = ({ onSubmit, onReset, formData, setFormData, data }) => {
  const { investor_name } = formData || {};

  console.log(data ? data : null);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Get Investor Data</h2>
      <form onSubmit={onSubmit}>
        <div className='investor_data_form_div'>
            <label>
              Investor Name:
              {/* <input type="number" value={investor_id} onChange={(e) => formData.investor_id = parseInt(e.target.value)} /> */}
              <input
                type="text"
                value={investor_name ?? ''}
                onChange={(e) => handleChange('investor_name', e.target.value)}
              />
            </label>
            <button type="submit">Get Data</button>
        </div>
        {/* <button type="button" onClick={onReset}>Reset</button> */}
      </form>
      {
        data ?
        <div className='investor_data_div'>
            <h1>{data.investor_name}</h1>
            <h2>Investments</h2>
            <InvestmentTable investments={data.Investments} />
            <h2>Transactions</h2>
            <TransactionTable transactions={data.Investments.map(investment => investment.Transactions)} />
        </div>
        : null
      }
    </div>
  );
};

export default InvestorDataForm;