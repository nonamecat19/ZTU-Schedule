import React from 'react';
import './App.css';
import Header from "./Header";
import Table from "./Table";

const App = (props: any) => {
  return (
    <div className="App">
      <Header/>
        <Table data={props.data}/>
    </div>
  )
}

export default App;
