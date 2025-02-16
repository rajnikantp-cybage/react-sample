import React, { useState } from "react";

function InvoiceForm({ addInvoice }) {
  const [invoice, setInvoice] = useState({ items: [] });
  const [item, setItem] = useState("");

  const handleAddItem = () => {
    setInvoice({ ...invoice, items: [...invoice.items, item] });
    setItem("");
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
        <label>Items: </label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <ul>
        {invoice.items.map((itm, index) => (
          <li key={index}>{itm}</li>
        ))}
      </ul>
      <button type="submit">Save Invoice</button>
    </form>
  );
}

export default InvoiceForm;
