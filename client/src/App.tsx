import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';
import Layout from './Layout/Layout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

  return (
    <>
      {loading ? <Loader /> : <Layout />}
    </>
  );
}

export default App;