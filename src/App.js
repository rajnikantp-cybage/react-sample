import React, { useState, useEffect } from "react";
import InvoiceForm from "./InvoiceForm";
import PrintInvoice from "./PrintInvoice";
import Config from "./Config";
import InvoiceList from "./InvoiceList";
import NavigationBar from "./NavigationBar";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [config, setConfig] = useState({});
  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState(-1);
  const [editingInvoice, setEditingInvoice] = useState(null);

  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const savedConfig = JSON.parse(localStorage.getItem("config")) || {};
    setInvoices(savedInvoices);
    setConfig(savedConfig);
  }, []);

  const addInvoice = (invoice) => {
    let updatedInvoices;
    if (editingInvoice !== null) {
      updatedInvoices = invoices.map((inv, index) =>
        index === currentInvoiceIndex ? invoice : inv
      );
      setEditingInvoice(null);
      setCurrentInvoiceIndex(-1);
    } else {
      updatedInvoices = [...invoices, invoice];
    }
    setInvoices(updatedInvoices);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
  };

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    localStorage.setItem("config", JSON.stringify(newConfig));
  };

  const deleteInvoice = () => {
    const updatedInvoices = invoices.filter(
      (_, index) => index !== currentInvoiceIndex
    );
    setInvoices(updatedInvoices);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    setCurrentInvoiceIndex(-1);
  };

  const findInvoice = (number) => {
    const index = invoices.findIndex((invoice) => invoice.number === number);
    if (index !== -1) {
      setCurrentInvoiceIndex(index);
    } else {
      alert("Invoice not found");
    }
  };

  const handleNavigation = (action) => {
    switch (action) {
      case "first":
        setCurrentInvoiceIndex(0);
        break;
      case "previous":
        setCurrentInvoiceIndex(Math.max(currentInvoiceIndex - 1, 0));
        break;
      case "next":
        setCurrentInvoiceIndex(
          Math.min(currentInvoiceIndex + 1, invoices.length - 1)
        );
        break;
      case "last":
        setCurrentInvoiceIndex(invoices.length - 1);
        break;
      case "create":
        setCurrentInvoiceIndex(-1);
        setEditingInvoice(null);
        break;
      case "edit":
        setEditingInvoice(invoices[currentInvoiceIndex]);
        break;
      case "delete":
        deleteInvoice();
        break;
      case "print":
        window.print();
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Invoice App</h1>
      <NavigationBar
        handleNavigation={handleNavigation}
        findInvoice={findInvoice}
      />
      <InvoiceForm addInvoice={addInvoice} editingInvoice={editingInvoice} />
      <PrintInvoice
        invoices={invoices}
        currentInvoiceIndex={currentInvoiceIndex}
        config={config}
      />
      <Config config={config} updateConfig={updateConfig} />
      <InvoiceList
        invoices={invoices}
        setCurrentInvoiceIndex={setCurrentInvoiceIndex}
      />
    </div>
  );
}

export default App;
