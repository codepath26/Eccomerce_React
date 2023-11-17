import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
// there are three method to used....
// import Header from "./Components/Header/Header";

      const router = createBrowserRouter([
        {
          path: "",
          element: <App />,
          children: [
            {
              path: "",
              element: <Home/>,
            },

            {
              path: "about",
              element: <About />,
            },
            {
              path: "store",
              element: <Store />,
            },
          ],
        },
      ]);

    

      // const router = createBrowserRouter(
      //     createRoutesFromElements(
      //       <Route path='' element={<App/>}>
      //         <Route path='' element={<Home/>} />
      //         <Route path='about' element={<About/>} />
      //         <Route path='store' element={<Store/>} />    
      //       </Route>
      //     )
      //   )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  {/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
      </Routes>
    </Router> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
