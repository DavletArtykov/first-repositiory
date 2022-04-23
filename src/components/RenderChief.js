


import { useState } from "react";
import RenderDate from './RenderDate'
import './RenderCheif.css'

function RenderChief(props){
    const [textInput,setInput] = useState('')
    const [textResult,setResult] = useState([])
    function onChangeHendler(event){
        setInput(event.target.value)
    }

    function onClickButton(event){
        if (textInput === '') {
            return 
        }


      
      setResult([...textResult,{text:textInput}])
    }



    return(
        <div className="render" >
            <input value={textInput} onChange={onChangeHendler} />
            <button onClick={onClickButton} >click</button>
            <div>{textResult.map((el,elem)=>{
                return   <div className="render-value" key={elem}><p>{el.text}   </p>  
                <RenderDate className='render-date' date={props.date}/>
           

                </div>
            })}</div>
        </div>
    )

}

export default RenderChief;