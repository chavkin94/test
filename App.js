import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import {useEffect, useState} from 'react';




function App() {
  const messages = ['hel1','hel2'];
 
  const [posts, setPosts] = useState([]);
  console.log(posts);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => { setPosts(json)})
    }, []);

  return (
   
  );

}

export default App;
