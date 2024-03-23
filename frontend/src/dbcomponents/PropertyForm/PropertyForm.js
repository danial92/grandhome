import React from 'react';

const PropertyForm = ({ onSubmit, onReset, formData, setFormData }) => {
  const {
    address,
    city,
    zip,
    country,
    buy_date,
    sell_date,
    llc_name,
    total_investment,
  } = formData || {};
  
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Add Property</h2>
      <div className='form-align'>
      <form onSubmit={onSubmit}>
      <div className='two_in_row'>
        <label>
          Address:
          <input
            type="text"
            value={address ?? ''}
            onChange={(e) => handleChange('address', e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city ?? ''}
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </label>
        <label>
          Zip:
          <input
            type="text"
            value={zip ?? ''}
            onChange={(e) => handleChange('zip', e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country ?? ''}
            onChange={(e) => handleChange('country', e.target.value)}
            />
        </label>
        </div>
      <div className='two_in_row'>
        <label>
          Buy Date:
          <input
            type="date"
            value={buy_date ?? ''}
            onChange={(e) => handleChange('buy_date', e.target.value)}
          />
        </label>
        <label>
          Sell Date:
          <input
            type="date"
            value={sell_date ?? ''}
            onChange={(e) => handleChange('sell_date', e.target.value)}
          />
        </label>
        </div>
        <label>
          LLC Name:
          <input
            type="text"
            value={llc_name ?? ''}
            onChange={(e) => handleChange('llc_name', e.target.value)}
          />
        </label>
        <label>
          Total Investment:
          <input
            type="number"
            value={total_investment ?? 0}
            onChange={(e) => handleChange('total_investment', e.target.value)}
          />
        </label>
        <button type="submit">Add Property</button>
        {/* <button type="button" onClick={onReset}>Reset</button> */}
      </form>
      </div>
    </div>
  );
};

export default PropertyForm;