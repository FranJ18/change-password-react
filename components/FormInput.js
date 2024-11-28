import React from "react";

const FormInput = ({ id, label, type = "text", value, onChange, error }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor={id} style={{ display: "block", marginBottom: "5px" }}>
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
    </div>
  );
};

export default FormInput;
