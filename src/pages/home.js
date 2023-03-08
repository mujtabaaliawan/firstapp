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
          backgroundSize: "cover",
          width: '100vw',
          height: '100vh'
      }}>
        <h1 style={{
            fontSize: "8vw",
            fontFamily: 'Times New Roman',
            textAlign: 'center',
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>Welcome to Market</h1>
      </div>
  );
};
export default Home;