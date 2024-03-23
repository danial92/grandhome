import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InvestorForm from '../dbcomponents/InvestorForm/InvestorForm';
import PropertyForm from '../dbcomponents/PropertyForm/PropertyForm';
import InvestmentForm from '../dbcomponents/InvestmentForm/InvestmentForm';
import TransactionForm from '../dbcomponents/TransactionForm/TransactionForm';
import InvestorDataForm from '../dbcomponents/InvestorDataForm/InvestorDataForm';
import '../dbcomponents/FormStyling.css';

function DBScreen() {
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [investors, setInvestors] = useState(null);
  console.log(investors)
  const [properties, setProperties] = useState(null);
  const [investments, setInvestments] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState('');
  console.log(formData);


  const resetFormFields = () => {
    // Reset form fields based on the form type
    if (formType === 'get_investor_data') {
        setFormData({
          investor_name: '',
          // Other investor fields
        });
    }
    if (formType === 'investor') {
      setFormData({
        investor_name: '',
        // Other investor fields
      });
    } else if (formType === 'property') {
      setFormData({
        address: '',
        // Other property fields
      });
    } else if (formType === 'investment') {
      setFormData({
        // Investment fields
      });
    } else if (formType === 'transaction') {
      setFormData({
        // Transaction fields
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if formData is empty
    if (!formData || Object.keys(formData).length === 0) {
      setErrorMessage('Form data is empty');
      setSuccessMessage('');
      return;
    }
    try {
      // Implement logic to handle form submission based on the form type
      if (formType === 'get_investor_data') {
        try {
        //   const response = await axios.get(`/get_investor_data/${formData.investor_name}`);
          const response = await axios.get(`/get_investor_data/${formData.investor_name}`);
          // const response = await axios.get('/get_investor_data', {
          //   params: {
          //     investor_name: formData.investor_name
          //   }
          // });
          console.log(response.data);
          setData(response.data);
        } catch (getInvestorError) {
          setErrorMessage(`Error adding investment: ${getInvestorError.message}`);
        }
      } else if (formType === 'investor') {
        try {
          const response = await axios.post('/add_investor', formData);
          console.log('Investor added successfully:', response.data);
          setSuccessMessage('Investor added successfully');
        } catch (investorError) {
          setErrorMessage(`Error adding investment: ${investorError.message}`);
        }
      } else if (formType === 'property') {
        try {
          const response = await axios.post('/add_property', formData);
          console.log('Property added successfully:', response.data);
          setSuccessMessage('Property added successfully');
        } catch (PropertyError) {
          setErrorMessage(`Error adding investment: ${PropertyError.message}`);
        }
      } else if (formType === 'investment') {
        try {
          const response = await axios.post('/add_investment', formData);
          const getProperties = await axios.get('/get_properties');
          setProperties(getProperties.data.investors_data);
          console.log('Investment added successfully:', response.data);
          setSuccessMessage('Investment added successfully');
        } catch (investmentError) {
          setErrorMessage(`Error adding investment: ${investmentError.message}`);
        }
      } else if (formType === 'transaction') {
        try {
          // Axios request to add a transaction
          const response = await axios.post('/add_transaction', formData);
          console.log('Transaction added successfully:', response.data);
          setSuccessMessage('Transaction added successfully');
        } catch (transactionError) {
          setErrorMessage(`Error adding investment: ${transactionError.message}`);
        }
      }
  
      // Reset form fields and error after successful submission
      resetFormFields();
      setError(null);
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const investorResponse = await axios.get('/get_investors');
        const propertyResponse = await axios.get('/get_properties');
        const investmentResponse = await axios.get('/get_investments');
        // console.log('Response Status:', response.status);
        // console.log('Response Data:', response.data);
        setInvestors(investorResponse.data);
        setProperties(propertyResponse.data);
        setInvestments(investmentResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function

  }, []);

  const renderForm = () => {
    // Render the selected form based on the form type
    switch (formType) {
      case 'get_investor_data':
        return <InvestorDataForm onSubmit={handleFormSubmit} onReset={resetFormFields} formData={formData} setFormData={setFormData} data={data} />;
      case 'investor':
        return <InvestorForm onSubmit={handleFormSubmit} onReset={resetFormFields} formData={formData} setFormData={setFormData} data={data} />;
      case 'property':
        return <PropertyForm onSubmit={handleFormSubmit} onReset={resetFormFields} formData={formData} setFormData={setFormData} data={data} />;
      case 'investment':
        return <InvestmentForm onSubmit={handleFormSubmit} onReset={resetFormFields} formData={formData} setFormData={setFormData} data={data} investors={investors} properties={properties} />;
      case 'transaction':
        return <TransactionForm onSubmit={handleFormSubmit} onReset={resetFormFields} formData={formData} setFormData={setFormData} data={data} properties={properties} investments={investments} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='header_div'>
        <h1>Grand Home Investments Database</h1>
        {/* Buttons to switch between forms */}
        <div>
          <button onClick={() => setFormType('get_investor_data')}>Get Investor Data</button>
          <button onClick={() => setFormType('investor')}>Add Investor</button>
          <button onClick={() => setFormType('property')}>Add Property</button>
          <button onClick={() => setFormType('investment')}>Add Investment</button>
          <button onClick={() => setFormType('transaction')}>Add Transaction</button>
        </div>
        <div>
        {successMessage ? (
          <div className="message-container success-message">
            <h3>{successMessage}</h3>
          </div>
        ) : null}

        {errorMessage ? (
          <div className="message-container error-message">
            <h3>{errorMessage}</h3>
          </div>
        ) : null}
      </div>
      </div>

      {renderForm()}
    </div>
  );
}

export default DBScreen;