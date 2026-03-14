import './App.css'

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
        {/* <button onclick="handleClick()">Click Me</button> */}
        <button onClick={handleClick}>Click Me</button>
        <br />

        <button onClick={function handleClick2() {
          alert('clicked 2')
        }}>Click Me2</button>
        <br />

        <button onClick={handleClick3}>Click Me3</button>
        <br />

        <button onClick={() => alert('clicked 4')} >Click Me4</button>
        <br />

        <button onClick={() => handleAdd5(5)}>Click Add 5</button>

      </div>
    </>
  )
}

export default App
