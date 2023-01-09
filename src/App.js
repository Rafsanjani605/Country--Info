
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Main from './layout/Main';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path:'/home',
        element:<Home></Home>
      },


      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }

    ]
    
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
     
    </div>
  );
}

export default App;
