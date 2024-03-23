import React from 'react';

const InvestmentForm = ({ onSubmit, onReset, formData, setFormData, investors, properties }) => {
  const {
    investor_id,
    property_id,
    principle,
    profit,
  } = formData || {};

  console.log(investors);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Add Investment</h2>
      <div className='form-align'> 
        <form onSubmit={onSubmit}>
          <label>
            Investor ID:
              <select value={investor_id ?? ''} onChange={(e) => handleChange('investor_id', e.target.value)}>
                <option value="">Select Investor</option>
                {investors ? investors.map((investor) => (
                  <option key={investor.investor_id} value={investor.investor_id}>
                    {investor.investor_name}
                  </option>
                )) : null}
              </select>
          </label>
          <label>
            Property ID:
              <select value={property_id ?? ''} onChange={(e) => handleChange('property_id', e.target.value)}>
                <option value="">Select Property</option>
                {properties ? properties.map((property) => (
                  <option key={property.property_id} value={property.property_id}>
                    {property.address}
                  </option>
                )) : null}
              </select>
          </label>
          <label>
            Principle:
            <input
              type="number"
              value={principle ?? ''}
              onChange={(e) => handleChange('principle', e.target.value)}
            />
          </label>
          <label>
            Profit:
            <input
              type="number"
              value={profit ?? ''}
              onChange={(e) => handleChange('profit', e.target.value)}
            />
          </label>
          <button type="submit">Add Investment</button>
          {/* <button type="button" onClick={onReset}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default InvestmentForm;