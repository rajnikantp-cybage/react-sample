import React, { useState, useEffect } from "react";

function InvoiceForm({ addInvoice, editingInvoice }) {
  const [invoice, setInvoice] = useState({ items: [] });
  const [item, setItem] = useState({
    serialNumber: "",
    description: "",
    quantity: 1,
    rate: 0,
    amount: 0,
  });

  useEffect(() => {
    if (editingInvoice) {
      setInvoice(editingInvoice);
    }
  }, [editingInvoice]);

  const handleAddItem = () => {
    setItem({ ...item, amount: item.quantity * item.rate });
    setInvoice({ ...invoice, items: [...invoice.items, item] });
    setItem({
      serialNumber: "",
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice(invoice);
    setInvoice({ items: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Invoice Information</h2>
      <div>
        <label>Invoice Number: </label>
        <input
          type="text"
          value={invoice.number || ""}
          onChange={(e) => setInvoice({ ...invoice, number: e.target.value })}
        />
      </div>
      <div>
        <h3>Items</h3>
        <label>Serial Number: </label>
        <input
          type="text"
          value={item.serialNumber}
          onChange={(e) => setItem({ ...item, serialNumber: e.target.value })}
        />
        <label>Description: </label>
        <input
          type="text"
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
        <label>Quantity: </label>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) =>
            setItem({ ...item, quantity: parseInt(e.target.value) })
          }
        />
        <label>Rate: </label>
        <input
          type="number"
          value={item.rate}
          onChange={(e) =>
            setItem({ ...item, rate: parseFloat(e.target.value) })
          }
        />
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <ul>
        {invoice.items.map((itm, index) => (
          <li key={index}>
            {itm.serialNumber} - {itm.description} - {itm.quantity} x {itm.rate}{" "}
            = {itm.amount}
          </li>
        ))}
      </ul>
      <button type="submit">Save Invoice</button>
    </form>
  );
}

export default InvoiceForm;
