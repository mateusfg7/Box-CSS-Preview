import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="main-box"></div>

      <span class="costumize-area">
        Style <input name="style" type="text"/>
      </span>
      <br/>
      <span class="costumize-area">
        Color <input name="color" type="color" />
      </span>
      <br/>
      <span class="costumize-area">
        Size <input name="size" type="number" />
      </span>
      <br/>
      <span class="costumize-area">
        Radius <input name="radius" type="number" />
      </span>
      <br/>

    </div>
  );
}

export default App;
