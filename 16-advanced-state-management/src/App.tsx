import { RouterProvider } from 'react-router';
import router from './router/router';

// react-router - datamode
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
