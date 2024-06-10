import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import Loader from './Components/Loader/Loader';

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
    </>
  );
}

export default App;