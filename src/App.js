import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Gallery from './components/gallery.js';
import Compon from './components/compon.js';
import Mymoney from './components/Mymoney';
import Compons_list from './components/Compons_list.js';
import UseState from './components/UseState1.js';
import UseState2 from './components/UseState2.js';
import NumBer_Limit from './components/NumBer_Limit.js';
import Number_Limit2 from './components/Number_Limit2.js';
import StarRating from './components/StarRating.js';
import ShoppingCar from './components/ShoppingCar.js';

const posts = [
  { 
    id: 1, 
    title: '別鬧了別鬧了', 
    content: '老弟' 
  },
  { 
    id: 2,
    title: '不要在破財了不要在破財了', 
    content: 'not funny' 
  }
];

function Blog(props) {
  const content = props.posts.map((post) => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}


function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <label>
          a:
          <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          b:
          <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <p>加法: {add(a, b)}</p>
      <p>減法: {subtract(a, b)}</p>
      <p>乘法: {multiply(a, b)}</p>
      <p>除法: {divide(a, b)}</p>
    </div>
  );
}

function App() {

  return (
    <>
      <div>
        <Greeting />
        <Calculator />
      </div>

      <div className="App">
        <Welcome name="Sara" />
      </div>
      
      <Blog posts={posts} />

      <div className='App'>
        <h1>江大海</h1>
        <MyClock />
      </div>
      <Mymoney />
      <section className='gallery'>
        <div className='gallery-container'>
          <Gallery />
        </div>
      </section>
     
      <div className='App'>
        <main>
         <Compon/>
        </main>
      </div>
      <div className='App'>
        <main>
          <Compons_list />
        </main>
      </div>
      <h1>--------------------------------------------------------------------------------------------------------------------</h1>
       <div className='App'>
          <h1>React useState example</h1>
          <UseState/>
      </div>
      <div className='App'>
          <h1>html nuber limit</h1>
          <NumBer_Limit/>
      </div>
      <div className='App'>
          <Number_Limit2/>
      </div>
      <div className='App'>
          <h1>教學評鑑</h1>
          <StarRating/>
      </div>
      <div className='App'>
          <h1>React useState example</h1>
          <UseState2/>
      </div>
      <div className='App'>
          <h1>購物車</h1>
          <ShoppingCar/>
      </div>  
      </>
  );
}

function MyClock(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>現在時間</h2>
      <h2>{currentTime}</h2>
    </div>
  );
}

function Welcome(props) {
  return <h1>{props.name}</h1>;
}

function Hello(props) {
  return (
    <div>
      <h1>嗨,{props.name}</h1>
      <p>(值從props來,固定不動,輸入的)</p>
    </div>
  )
  }

function Accept(props) {
  return (
    <div>
      <h1>你現在有,{props.number}元</h1>
      <p>(值一樣式props傳來的)</p>
    </div>
  )
}


export default App;