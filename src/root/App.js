import './App.css';
import Menu from '../menu/menu.jsx'
import Order from '../orders/order.jsx'


function App() { 
  return (
   <>
      <h1>Lotteria</h1>
      <div className="container">
        <Menu />
        <Order />
      </div>
    </>
  );
}

export default App;
