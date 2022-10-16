import "../../public/styling/App.css";
import * as React from "react";
import Heading from "./templates/Heading";
import Footer from "./templates/Footer";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: <ErrorPage />
    },

    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />
    }
  ]);

  return (
    <div className="App">
      <html lang="en">
        <header>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>CV</title>
        </header>
        <body>
          <Heading />
          <RouterProvider router={router} />
          <Footer />
        </body>
      </html>
    </div>
  );
}
