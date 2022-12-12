import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/Home/About/About';
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
          element: <Home></Home>,
        },
        {
          path: '/details/:id',
          loader: async ({params})=> fetch(`https://portfolio-server-pi.vercel.app/projects/${params.id}`),
          element: <ProjectDetails></ProjectDetails>
        },
        {
          path: '/blogs',
          element: <Blogs/>
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
