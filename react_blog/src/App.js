import './App.css';

import{ useState } from 'react';

function App() {

  // When save data short time, use Function or state.
  // If use state, then html will be rerendered.(recommended, better then function)
  let post = 'ReactiveForms';
  let [title, b] = useState('React or Vue');
  let logo = 'React_blog';
  let [date, d] = useState('Sep 13');

  // Destructuring
  let [a, c] = [1, 2];
  // let a = num[0];
  // let c = num[1];

  // data binding = {};
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'white', fontSize : '20px'}}>{ logo }</h4>
      </div>
      <div className="list">
        <h4>{ title }</h4>
        <p>{ date }</p>
      </div>
      <div className="list">
        <h4>Why React?</h4>
        <p>{ date }</p>
      </div>
      <div className="list">
        <h4>ReactDOM</h4>
        <p>{ date }</p>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
