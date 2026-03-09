
  

import React from "react";
import ReactDOM from "react-dom/client";

/** 
       * Header 
           - Logo
           - Nav Item(Right Side)
           - Cart
       * Body
           - Search bar
           - RestrauntList
           - RestaurantCard
              - Image
              - Name
              - Rating
              - Cusine
  
       * Footer
              - links
              -Copyright
      */

const title = (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imgs.search.brave.com/3HwZ--8MR804rVC5SBCUvyF3ATOZ9AulLmAQIHObOoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDQv/MTcwLzgwNS9zbWFs/bC9mb29kLWhvdXNl/LWxvZ28tZGVzaWdu/LXRlbXBsYXRlLWZy/ZWUtdmVjdG9yLmpw/Zw"
    /> 
  </a>
);



const HeaderComponent=  ()=> 
{
  return ( 
     <div className="header">
        {title}
       
       
              <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Cart</li>
                </ul>

              </div>
          </div>
  );
};  


const Body =()=>
{
  return (
    <h4> Body</h4>
  )
}
const Footer =()=>
{
   return (
   <h4> Footer</h4>
  )
}

 
// const AppLayout=()=>
// {
//   return (
//    <>
//     <Headers/>
//     <Body/>
//     <Footer/>
//   </>
//   )
// }


const jsx=(
  <div style={{
    backgroundColor:"red",
  }}>
    <h1>JSX</h1>
    <h1>Second JSX</h1>

  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root 

// asyn defer
root.render(jsx);
