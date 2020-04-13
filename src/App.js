import React, { useState } from 'react';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './reset.css';
import './App.css';

import BoxPreview from './components/BoxPreview'

import updateBorderStyle from './functions/BorderUpdates/updateBorderStyle'
import updateBorderColor from './functions/BorderUpdates/updateBorderColor'
import updateBorderSize from './functions/BorderUpdates/updateBorderSize'
import updateBorderRadius from './functions/BorderUpdates/updateBorderRadius'


function App() {

  const [stateTop, setStateTop] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateRight, setStateRight] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateButtom, setStateButtom] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })
  const [stateLeft, setStateLeft] = useState({
    style: 'solid',
    color: '#000',
    size: '5px',
    radius: '0',
  })

  
  return (
    <div className="App">
      <BoxPreview/>
      
      <div id="area">
        
        <div className="custumize-section"> 
          <p>Top</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateTop({ ...stateTop, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'top')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input 
                    name="color" 
                    type="color" 
                    onChange={
                      (event)=>{
                        setStateTop({ ...stateTop, color: event.target.value })
                        updateBorderColor(document.getElementById('main-box'), event.target.value, 'top')
                      }
                    }
                  />
          </div>
          <br/>
          <div className="costumize-area">
            Size <input 
                  name="size" 
                  type="number" 
                  onChange={
                    (event)=>{
                      setStateTop({ ...stateTop, size: event.target.value + 'px' })
                      updateBorderSize(document.getElementById('main-box'), event.target.value, 'top')
                    }
                  }
                />
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input 
                    name="radius" 
                    type="range" 
                    value={stateTop.radius} 
                    step="1" 
                    min="0" 
                    max="100" 
                    onChange={
                      (event)=>{
                        setStateTop({ ...stateTop, radius: event.target.value })
                        updateBorderRadius(document.getElementById('main-box'), event.target.value, 'top')
                      }
                    }
                  /> 
            <span>{stateTop.radius+'%'}</span>
          </div>
        </div>

        <div className="custumize-section">
          <p>Righ</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateRight({ ...stateRight, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'right')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input name="color" type="color" onChange={(event)=>{
              setStateRight({ ...stateRight, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'right')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateRight({ ...stateRight, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'right')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateRight.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateRight({ ...stateRight, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'right')
            }}/> <span>{stateRight.radius+'%'}</span>
          </div>
        </div>

        <div className="custumize-section">
          <p>Bottom</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateButtom({ ...stateButtom, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'bottom')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input name="color" type="color" onChange={(event)=>{
              setStateButtom({ ...stateButtom, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateButtom({ ...stateButtom, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateButtom.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateButtom({ ...stateButtom, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'bottom')
            }}/> <span>{stateButtom.radius+'%'}</span>
          </div>
        </div>

        <div className="custumize-section">
          <p>Left</p>
          <div className="costumize-area">
            Style <select onChange={
                    (event) => {
                      setStateLeft({ ...stateLeft, style: event.target.value })
                      updateBorderStyle(document.getElementById('main-box'), event.target.value, 'left')
                    }
                  }>
                    <option value="solid" selected>solid</option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="dotted">dotted</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                    <option value="hidden">hidden</option>
                  </select>
          </div>
          <br/>
          <div className="costumize-area">
            Color <input name="color" type="color" onChange={(event)=>{
              setStateLeft({ ...stateLeft, color: event.target.value })
              updateBorderColor(document.getElementById('main-box'), event.target.value, 'left')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Size <input name="size" type="number" onChange={(event)=>{
              setStateLeft({ ...stateLeft, size: event.target.value + 'px' })
              updateBorderSize(document.getElementById('main-box'), event.target.value, 'left')
            }}/>
          </div>
          <br/>
          <div className="costumize-area">
            Radius <input name="radius" type="range" value={stateLeft.radius} step="1" min="0" max="100" onChange={(event)=>{
              setStateLeft({ ...stateLeft, radius: event.target.value })
              updateBorderRadius(document.getElementById('main-box'), event.target.value, 'left')
            }}/> <span>{stateLeft.radius+'%'}</span>
          </div>
        </div>
      
      </div>
      
      <div className="css-area" >
        <h3>CSS</h3>
        <textarea id="text-to-copy" type="text" value={`
border-style: ${stateTop.style} ${stateRight.style} ${stateButtom.style} ${stateLeft.style};
border-color: ${stateTop.color} ${stateRight.color} ${stateButtom.color} ${stateLeft.color};
border-width: ${stateTop.size} ${stateRight.size} ${stateButtom.size} ${stateLeft.size};
border-radius: ${stateTop.radius}% ${stateRight.radius}% ${stateButtom.radius}% ${stateLeft.radius}%;
        `}/>
        <br/>
      </div>
      <button onClick={() => {
        const areaToCopy = document.getElementById("text-to-copy")
        areaToCopy.select()
        document.execCommand('copy')
      }}>Copy css to clipboard</button>

    </div>
  );
}

export default App;
