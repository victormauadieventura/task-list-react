import React from 'react';

import "./button.component.scss"

// children: similar to Angular ng-template
// children: it's a prop, it can be a variable, function, anything
const Button = ({ children, onClick }) => {
  return ( 
    <button onClick={onClick} className="button">
      { children }
    </button>
   );
}
 
export default Button;