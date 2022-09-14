// const element = document.createElement('h1')
// element.innerText = 'Hello World'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM  from 'react-dom'

const user = {
    firstName:'Marco',
    lasName: 'Hernandez',
    avatar: 'https://i0.wp.com/cinemedios.com/wp-content/uploads/2020/07/game-of-thrones-secuela-miniserie-hbo.jpeg?fit=1024%2C640&ssl=1'
}


function getName(user){
    return `${user.firstName} ${user.lasName}`
}

function getGreeting(user){
    if(user){
     return   <h1>Hello Sr. { getName(user) }</h1>
    }
    return <h1>Hello Stranger</h1>
}

// const name = 'Marco'


const element = (
    <div>
        <h1> { getGreeting(user) }</h1>
        <img src= {user.avatar} ></img>
    </div>
)
const container = document.getElementById('root')

//Recibe 2 parametros QUE Y DODNE 
ReactDOM.render(element, container)