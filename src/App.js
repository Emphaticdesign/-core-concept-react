import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'kuddus', 'Alomgir', 'Salam', 'borkot'];
  const products = [
    { name: 'photoShop', price: '$99' },
    { name: 'Illustator', price: '$60.55' },
    { name: 'pdf reader', price: '$6.99' },
    { name: 'adobe primer pro', price: '$199.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name="munna" job="football"></Person>
        <Person name="khairul" job="watching movie"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '25px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  return (
    <div style={{ border: "2px solid red", margin: "20px", padding: "10px", width: "300px", borderRadius: "20px" }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
