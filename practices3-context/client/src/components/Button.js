/** @format */

import React from "react";
import {useTheme} from "../context/ThemeContext";

function Button() {
    
    const {theme,setTheme} = useTheme(); 
  return (
    <div>
      <h3>Theme Val : {theme}</h3>
      <button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>Change Theme</button>
    </div>
  );
}

export default Button;
