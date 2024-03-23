import React from 'react';

const TransactionForm = ({ onSubmit, onReset, formData, setFormData, investments, properties }) => {
  const {
    investment_id,
    from_property_id,
    amount,
    transaction_type,
    transaction_date,
    is_combined_rollover,
    method_of_payment,
  } = formData || {};

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <div className='form-align'>
      <form onSubmit={onSubmit}>
        <label>
          Investment ID:
            <select value={investment_id ?? ''} onChange={(e) => handleChange('investment_id', e.target.value)}>
              <option value="">Select Property</option>
              {investments ? investments.map((investment) => (
                <option key={investment.investment_id} value={investment.investment_id}>
                  {investment.Investor.investor_name} | {investment.Property.address} | Principle: {investment.principle} | Profit: {investment.profit}
                </option>
              )) : null}
            </select>
        </label>
        <label>
          From Property ID:
           <select value={from_property_id ?? ''} onChange={(e) => handleChange('from_property_id', e.target.value)}>
              <option value="">Select Property</option>
              {properties ? properties.map((property) => (
                <option key={property.property_id} value={property.property_id}>
                  {property.address}
                </option>
              )) : null}
            </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount ?? ''}
            onChange={(e) => handleChange('amount', e.target.value)}
          />
        </label>
        <label>
          Transaction Type:
          <select
            value={transaction_type ?? ''}
            onChange={(e) => handleChange('transaction_type', e.target.value)}
          >
            <option value="">Select Transaction Type</option>
            <option value="Rollover">Rollover</option>
            <option value="Return of Investment">Return of Investment</option>
            <option value="New Investment">New Investment</option>
          </select>
        </label>
        <label>
          Transaction Date:
          <input
            type="date"
            value={transaction_date ?? ''}
            onChange={(e) => handleChange('transaction_date', e.target.value)}
          />
        </label>
        <label>
          Method of Payment:
          <select
            value={method_of_payment ?? ''}
            onChange={(e) => handleChange('method_of_payment', e.target.value)}>
            <option value="">Select Method of Payment</option>
            <option value="ACH">ACH</option>
            <option value="WIRE">WIRE</option>
            <option value="CHECK">CHECK</option>
          </select>
        </label>
        <button type="submit">Add Transaction</button>
        {/* <button type="button" onClick={onReset}>Reset</button> */}
      </form>
      </div>
    </div>
  );
};

export default TransactionForm;


// ach, wire, check