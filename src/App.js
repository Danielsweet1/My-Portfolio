import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
