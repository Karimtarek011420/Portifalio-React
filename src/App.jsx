import React, { Component } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
const Rout = createHashRouter([
  {
    path: "STARTFRAMEWORK",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={Rout} />
      </>
    );
  }
}
