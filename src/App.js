import React from "react"; 
import ApiFetch from "./ApiFetch";

function App() {
  
  const sayHello = () => {
    console.log("Hello");
  };

  const counter = 0;

  return ( 
   <div>
     <ApiFetch />
   </div> 
  );
}

export default App;
