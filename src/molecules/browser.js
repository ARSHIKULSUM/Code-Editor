import './browser.css'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../contextapi/dataProvider'

export default function Browser(){

    const[src, setSrc]= useState('');
    //we have html css and js as a string from dataProvider noe here we have to combile them in such a way that they gave us a document
    
    const{html, css, js} = useContext(DataContext);

    const srcCode=`
       <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
       </html>
       `;

       useEffect(()=>{
        const printResult= setTimeout(()=>{
           setSrc(srcCode)
         }, 1000)

         return ()=> clearTimeout(printResult)
       },[html,css,js])
    
    
    //now we will display sourcecode using iframe
    //we can pass the source in a prop named srcDoc to display
    //title is simple string
    //putting allow-script in sandbox because iframe don't allow js
    return(
        <>
        <iframe
            srcDoc={src} //usestate
            title='OUTPUT'
            
            sandbox='allow-modals allow-scripts'  //allow script bcz iframe don't support js, and allow-modals to support web view
            width="100%"
            height="300px"></iframe>
        </>
    )
}