import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import PrintInvoice from './PrintInvoice';
import Config from './Config';

function App() {
  const [invoices, setInvoices] = useState([]);
  const [config, setConfig] = useState({});

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
    localStorage.setItem('invoices', JSON.stringify([...invoices, invoice]));
  };

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    localStorage.setItem('config', JSON.stringify(newConfig));
  };

  return (
    <div className="App">
      <h1>Invoice App</h1>
      <InvoiceForm addInvoice={addInvoice} />
      <PrintInvoice invoices={invoices} config={config} />
      <Config config={config} updateConfig={updateConfig} />
    </div>
  );
}

export default App;