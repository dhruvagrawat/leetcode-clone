import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="username" />
        <button>sign in</button>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
        <div id="problem-statement">
        </div> 
      </div>
    )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
export default App

