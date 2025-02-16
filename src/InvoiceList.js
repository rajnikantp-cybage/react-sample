import React from "react";

function InvoiceList({ invoices, setCurrentInvoiceIndex }) {
  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index} onClick={() => setCurrentInvoiceIndex(index)}>
            {invoice.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
