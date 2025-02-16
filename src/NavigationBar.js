import React, { useState } from "react";

function NavigationBar({ handleNavigation, findInvoice }) {
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const handleFind = () => {
    findInvoice(invoiceNumber);
  };

  return (
    <div className="navigation-bar">
      <button onClick={() => handleNavigation("first")}>First</button>
      <button onClick={() => handleNavigation("previous")}>Previous</button>
      <button onClick={() => handleNavigation("next")}>Next</button>
      <button onClick={() => handleNavigation("last")}>Last</button>
      <button onClick={() => handleNavigation("create")}>Create</button>
      <button onClick={() => handleNavigation("edit")}>Edit</button>
      <button onClick={() => handleNavigation("delete")}>Delete</button>
      <button onClick={() => handleNavigation("print")}>Print</button>
      <input
        type="text"
        placeholder="Find by Invoice Number"
        value={invoiceNumber}
        onChange={(e) => setInvoiceNumber(e.target.value)}
      />
      <button onClick={handleFind}>Find</button>
    </div>
  );
}

export default NavigationBar;
