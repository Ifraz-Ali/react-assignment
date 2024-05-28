import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';



function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Rockets />
      },
      {
        path: '/missions',
        element: <Missions />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  );
  return (
    <div className="App">


      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
