import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PersonalData from "./pages/PersonalData";
import Root from "./pages/Root";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/personaldata", element: <PersonalData /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
