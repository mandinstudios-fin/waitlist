import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import Loader from './Components/Loader/Loader';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <>
      {loading ? <Loader /> : <Home />}
      <Toaster />
    </>
  );
}

export default App;