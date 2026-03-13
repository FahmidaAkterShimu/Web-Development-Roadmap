import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer'

function App() {
  const actors = ['Bappa', 'Sunny', 'Salman', 'Jasim'];

  const singers = [
    { id: 1, name: 'Dr. Mahfuz', age: 68 },
    { id: 2, name: 'Tahsan', age: 45 },
    { id: 3, name: 'Shuvro Deb', age: 57 }
  ];

  // const time = 50;

  return (
    <>
      <h1>React Core Concepts</h1>

      {
        singers.map(singer => <Singer key={singer.id} singerName={singer.name} singerAge={singer.age} ></Singer>)
      }

      {/* {
        actors.map(actorName => <Actor actor={actorName}></Actor>)
      } */}



      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}></ToDo>
      <ToDo
        task="Revise JS"
        isDone={false}></ToDo>
      <ToDo
        task="Take a shower"
        isDone={true}></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Manush" tech="JS"></Developer>
      <Developer name="Omanush" tech="python"></Developer>
      <Developer name="ExtraManush" tech="react"></Developer>
      <Device deviceName="Mobile" price="12000"></Device>
      <Device deviceName="Desktop" price="60000"></Device>
      <Device deviceName="Laptop" price="75000"></Device>
      <Player name="tamim" runs="5000"></Player>
      <Salami event="Rojar eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  )
}


function Salami({ event, amount = 0 }) {
  return (
    <div>
      <h3>Salami For: {event} </h3>
      <p>Amount: {amount} </p>
    </div>
  )
}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

const { name, tech } = { name: 'Manush', tech: 'JS' }

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Device(props) {
  return (
    <div>
      <h3>Device: {props.deviceName} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

function Person() {
  const age = 26;
  const name = 'Jui'

  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }

  return (
    <p style={personStyle}>I am a person. My name is {name}. I am {age} years old.</p>
  )
}


function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}


function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
    </div>
  )
}

export default App
