import React, { useState } from 'react';

const FormExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const isInputFilled = inputValue.trim() !== '';

  return (
    <div>
      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button disabled={!isInputFilled}>
        Submit
      </button>
    </div>
  );
};

export default FormExample;