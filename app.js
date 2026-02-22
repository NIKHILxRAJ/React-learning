
  /**
   *
   * HMR - Hot Module Reloading 
   * File Watcher algorithm - C++
   * BUNDLING
   * MINIFY
   * Cleaning our Code
   * Dev and Production Build
   * Super Fast build algorithm
   * Image Optimization
   * Caching while development
   * Compresion
   *  Compatable with older version of browser 
   * HTTPS on dev  
   * port Number
   *  Consistent Hashing Algorithm
   * Zero Config
   * Tree Shaking - Removing unused code.
   *  
   */

import React from "react";
import ReactDOM from "react-dom/client";

// create elements with UNIQUE keys
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "heading-1" },
  "Heading 1 from parcel" 
); 
// React .createElement => Object => HTML (DOM)  // React Element  

const heading2 = React.createElement(
  "h2",
  { id: "title2", key: "heading-2" },
  "Heading 2 from parcel"
);

// parent container
const container = React.createElement(
  "div",
  { id: "container" },
  [heading1, heading2]
);



// adding some feature

// create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
