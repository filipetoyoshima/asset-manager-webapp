import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  console.log('App');
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
