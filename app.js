import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header 
 *  - Logo(Title)
 *  - Nav Items(Right Side)
 *  - Cart
 * Body
 *  - Search bar
 *  - RestaurantList
 *  - ResturantCard(many cards)
 *      - Image
 *      - name
 *      -Rating
 *      -Cusines
 * 
 * Footer
 *      -Links
 *      -Copyright
 */

// 🔹 Logo Component (better than variable)
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imgs.search.brave.com/ge8Etm-p_mRnUR82886II0qikVCBbQpn2tx-TlJomgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/OTc3LzYwNS9zbWFs/bC90dXJiYW4tZm9y/ay1hbmQtc3Bvb24t/d2l0aC1tdXN0YWNo/ZS1pbmRpYW4tZm9v/ZC1yZXN0YXVyYW50/LWxvZ28tZGVzaWdu/LWNvbmNlcHQtaWRl/YS12ZWN0b3IuanBn"
    />
  </a>
);

// 🔹 Header Component
const Header = () => {
  return (
    <div className="header">
      <Title />

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

// 🔹 Body Component
const burkerKing={
  name :"Burger King",
  image : "https://imgs.search.brave.com/fvzf2_sudXucsZKnbizEp-UAl_NTvyZK_ZS5S76RHhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJn/ZXJraW5nbWVudXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAzL1RoZS1L/aW5nLW9mLVdyYXAu/d2VicA",
  cuisines :["Burger", "American"],
  rating:"4.2",
};

const ResturantCard=()=>
{
  return(
    <div className="card">
      <img src={burkerKing.image}/>
      <h2> {burkerKing.name}</h2>
     <h3>{burkerKing.cuisines.join(",")}</h3>
      <h4>{burkerKing.rating} stars</h4>
      
      

    </div>
  )
}
const Body = () => {
  return (
    <div className="resturnat-list">
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
    </div>
  )
};

// 🔹 Footer Component
const Footer = () => {
  return <h4>Footer</h4>;
};

// 🔹 App Layout (MAIN COMPONENT)
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// 🔹 Root Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);