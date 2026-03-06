
  

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

const title =
( 
  <h1 id="title" key="h2">
   Namaste React
  </h1>
);




const HeaderComponent=  ()=>
{
  return (
     <div>
        {title}
        {2+2}
              <h2> Namaste React functional component</h2>
              <h2>This is a h2 tage </h2>
          </div>
  );
};  

 


// create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root 

// asyn defer
root.render(<HeaderComponent/>);
