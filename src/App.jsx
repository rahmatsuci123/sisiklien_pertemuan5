import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Selamat Datang!</h1>
      <p className="text-gray-600 mb-8">
        Silakan login atau daftar untuk melanjutkan.
      </p>
      <nav className="flex justify-center gap-4">
        <Link
          to="/login"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Register
        </Link>
      </nav>
    </div>
  </div>
);

export default App;
