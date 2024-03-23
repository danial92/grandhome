import React from 'react';

const InvestorForm = ({ onSubmit, onReset, formData, setFormData }) => {
  const {
    investor_name,
    first_name,
    middle_name,
    last_name,
    email1,
    email2,
    phone_number,
    is_llc,
    company_name,
    address1,
    address2,
    city,
    state,
    zip,
    country,
  } = formData || {};

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <h2>Add Investor</h2>
      <div className='form-align'>
        <form onSubmit={onSubmit}>
          <div className='two_in_row'>
            <label>
              Investor Name:
              <input
                type="text"
                value={investor_name ?? ''}
                onChange={(e) => handleChange('investor_name', e.target.value)}
              />
            </label>
            <label>
              First Name:
              <input
                type="text"
                value={first_name ?? ''}
                onChange={(e) => handleChange('first_name', e.target.value)}
              />
            </label>
            <label>
              Middle Name:
              <input
                type="text"
                value={middle_name ?? ''}
                onChange={(e) => handleChange('middle_name', e.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={last_name ?? ''}
                onChange={(e) => handleChange('last_name', e.target.value)}
              />
            </label>
          </div>
          <div className='two_in_row'>
            <label>
              Email 1:
              <input
                type="email"
                value={email1 ?? ''}
                onChange={(e) => handleChange('email1', e.target.value)}
              />
            </label>
            <label>
              Email 2:
              <input
                type="email"
                value={email2 ?? ''}
                onChange={(e) => handleChange('email2', e.target.value)}
              />
            </label>
            </div>
          <div className='two_in_row'>
            <label>
              Phone Number:
              <input
                type="tel"
                value={phone_number ?? ''}
                onChange={(e) => handleChange('phone_number', e.target.value)}
                />
            </label>
            <label style={{ display: 'flex' }}>
              <p>Is LLC:</p>
              <input
                type="checkbox"
                checked={is_llc ?? false}
                onChange={(e) => handleChange('is_llc', e.target.checked)}
                />
            </label>
            <label>
              Company Name:
              <input
                type="text"
                value={company_name ?? ''}
                onChange={(e) => handleChange('company_name', e.target.value)}
                />
            </label>
          </div>
          <div className='two_in_row'>
            <label>
              Address 1:
              <input
                type="text"
                value={address1 ?? ''}
                onChange={(e) => handleChange('address1', e.target.value)}
              />
            </label>
            <label>
              Address 2:
              <input
                type="text"
                value={address2 ?? ''}
                onChange={(e) => handleChange('address2', e.target.value)}
              />
            </label>
            </div>
          <div className='two_in_row'>
            <label>
              City:
              <input
                type="text"
                value={city ?? ''}
                onChange={(e) => handleChange('city', e.target.value)}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                value={state ?? ''}
                onChange={(e) => handleChange('state', e.target.value)}
              />
            </label>
            </div>
          <div className='two_in_row'>
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
            <button type="submit">Add Investor</button>
            {/* <button type="button" onClick={onReset}>Reset</button> */}
          </form>
      </div>
    </div>
  );
};

export default InvestorForm;