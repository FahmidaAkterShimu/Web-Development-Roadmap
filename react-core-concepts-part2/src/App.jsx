import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends'
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())


const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}


function App() {

  const postsPromise = fetchPosts();


  const friendsPromise = fetchFriends();


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

        <Players></Players>

        <Suspense fallback={<h4>Posts are coming...</h4>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>

        <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>

        <Batsman></Batsman>

        <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>

        <Counter></Counter>

        {/* <button onclick="handleClick()">Click Me</button> 
        */}

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
