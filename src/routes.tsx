
import ErrorPage from "./error-page"
import Contact from "./routes/contact"
import Home from "./routes/home"
import Portfolio from "./routes/portfolio"
import Resume from "./routes/resume"
import Root from "./routes/root"

export default [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
];
