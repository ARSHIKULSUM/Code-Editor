import './notePad.css'
import '../App.css'
import { useState } from 'react';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'; //to detect xml
import 'codemirror/mode/javascript/javascript'; //to detect js
import 'codemirror/mode/css/css';//to detect css

export default function NotePad({symbol,imgclass,language,value, onChange}){
      
   const[screen, setScreen]=useState(true);
   
    function handleChange(editor, data, value){
            onChange(value)
    }
    /* function expandScreen(){
        var outer = document.querySelector('.outer');
  if (outer.style.width === '400px') {
    outer.style.width = '100px';
  } else {
    outer.style.width = '400px';
  }
     }*/
    
              
    return(
        <>
        <div className='outer' style={screen? null : {flexGrow:0}} > 
            <div className='changedNav'>
            <div id='img' className={imgclass}>{symbol}</div>  
            <h4 id='lang'>{language}</h4>  
            
                
                <img 
                className='expandScreenIcon' src='https://www.citypng.com/public/uploads/preview/hd-full-screen-white-icon-png-11637222048r3lrt1ejhc.png'/>
                </div>     
                
                <ControlledEditor 
                   className='controlled-editor'
                   value={value}
                   onBeforeChange={handleChange}
                     options={{
                         theme: 'material',
                         lineNumbers: 'true' //to have number in every line
                     }}/>
 
        </div>
       
        </>
    )
}