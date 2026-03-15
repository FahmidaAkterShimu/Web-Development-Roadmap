import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';

function App() {

  function handleClick() {
    alert('I am clicked.')
  }


  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <div>

        <h1>Get started</h1>
        {/* <button onclick="handleClick()">Click Me</button> 
        */}

        <Users></Users>

        <Batsman></Batsman>

        <Counter></Counter>

        <button onClick={handleClick}>Click Me</button>

        <button onClick={function handleClick2() {
          alert('clicked 2')
        }}>Click Me2</button>

        <button onClick={handleClick3}>Click Me3</button>

        <button onClick={() => alert('clicked 4')} >Click Me4</button>

        <button onClick={() => handleAdd5(5)}>Click Add 5</button>

      </div>
    </>
  )
}

export default App
