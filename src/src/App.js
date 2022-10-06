import * as React from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: []
  }
]);

function App() {
  const darkMode = useDarkMode(true);
  
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;