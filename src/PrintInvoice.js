import React from "react";

function PrintInvoice({ invoices, config }) {
  const handlePrint = (invoice) => {
    const printWindow = window.open("", "_blank");
    const printContent = `
      <html>
        <head>
          <title>Print Invoice</title>
        </head>
        <body>
          <h1>Invoice Number: ${invoice.number}</h1>
          <ul>
            ${invoice.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </body>
      </html>
    `;
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            {invoice.number}
            <button onClick={() => handlePrint(invoice)}>Print</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrintInvoice;
