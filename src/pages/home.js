import React, {useEffect} from 'react';
import market2 from '../images/market2.jpg';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
        }, []);
  return (
      <div style={{
          position: 'fixed',
          backgroundImage: `url(${market2})`,
          backgroundPosition:'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
      }}>
        <h1 style={{
            fontSize: "10em",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            paddingTop: '50vh',
            color: "white",
        }}>Welcome to Market</h1>
      </div>
  );
};
export default Home;