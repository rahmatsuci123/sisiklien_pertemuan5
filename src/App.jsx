import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import BalancePage from "./pages/balance";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Enhance Client-Side Performance.
          <span className="sm:block"> Boost User Engagement. </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          This project focuses on optimizing client-side programming, delivering
          a smooth user experience with responsive design and dynamic
          interactions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default App;
