import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details/:id',
          loader: async ({params})=> fetch(`http://localhost:5000/projects/${params.id}`),
          element: <ProjectDetails></ProjectDetails>
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
