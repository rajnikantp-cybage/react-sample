import React, { useState } from "react";

function Config({ config, updateConfig }) {
  const [localConfig, setLocalConfig] = useState(config);

  const handleChange = (field, value) => {
    setLocalConfig({ ...localConfig, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateConfig(localConfig);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Configure Print Layout</h2>
      <div>
        <label>Invoice Number Position: </label>
        <input
          type="text"
          value={localConfig.numberPosition || ""}
          onChange={(e) => handleChange("numberPosition", e.target.value)}
        />
      </div>
      <div>
        <label>Items Position: </label>
        <input
          type="text"
          value={localConfig.itemsPosition || ""}
          onChange={(e) => handleChange("itemsPosition", e.target.value)}
        />
      </div>
      <button type="submit">Save Configuration</button>
    </form>
  );
}

export default Config;
