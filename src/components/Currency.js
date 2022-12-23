import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    
    const newcurrency = event.target.value;
    setCurrency(newcurrency)
    dispatch({
      type: "CHG_CURRENCY",
      payload: newcurrency,
    }); 
    
  
    console.log(currency);
     
  };
  return (
    <div className="alert alert-secondary">
      <select
        className="custom-select bg-success text-white"
        id="inputGroupSelect01"
        onChange={handleChange}
      >
        <option >Currency(£ Pounds)</option>
        <option key="dollar" value="$" name="dollar">
          $ Dollar
        </option>
        <option key="pounds" value="£" name="pounds">
          £ Pound
        </option>
        <option key="euro" value="€" name="euro">
          € Euro
        </option>
        <option key="ruppe" value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
