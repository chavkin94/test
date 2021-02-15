import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Поймай кнопку.
        </a>
        {/* <h2> {messages.map((el, index, messages)=>(<div> {el} </div>)) 
        } </h2> */}

        <h2> {posts.map(item=>(<div> {[item.id,'. ' , item.title]} </div>)) 
        } </h2>
        <Button count="5" children1="Давай еще " enable children2="раз!!!" ></Button>
        
      </header>
    </div>
  );

}

