import './editor.css'
import NotePad from '../atoms/notePad'
import { DataContext } from '../contextapi/dataProvider'
import { useContext } from 'react'

export default function Editor(){
  const {html, setHtml, css, setCss, js, setJs}= useContext(DataContext);
    return(
      <div className='editorOuter'>
       <NotePad value={html} onChange={setHtml}
              imgclass='imgone' language='HTML' symbol='\'/>
       <NotePad value={css} onChange={setCss}
               imgclass='imgtwo' language='CSS' symbol='*'/>
       <NotePad value={js} onChange={setJs}
               imgclass='imgthree' language='JS' symbol='( )'/>
      </div>

    )
}