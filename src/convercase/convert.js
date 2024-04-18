import React, { useState } from 'react'

export default function Convert() {

    const [myText,setMyText] =useState('');

    // onchange event

    const Onchange=(event)=>{
        setMyText(event.target.value)
    }

    // lower case
    const LowerCase=()=>{
        let newText=myText.toLowerCase();
        setMyText(newText);
    }

 

    return (
        <div className='container mt-5'>
            <h1 className='text-uppercase text-center'>Enter the text to analyze below</h1>
            <div className='line'></div>

            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter your Text:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                    onChange={Onchange} value={myText} rows="8"></textarea>

                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button type="button" class="btn btn-color me-3" onClick={LowerCase}>Lower case</button>
                    <button type="button" class="btn btn-color me-3" >UPPER CASE</button>
                    <button type="button" class="btn btn-color me-3" >Capitalize</button>
                    <button type="button" class="btn btn-color me-3">Reverse</button>
                    <button type="button" class="btn btn-color me-3" >Clear</button>
                </div>
            </form>

            <div className='mt-5'>
                <h3 className='text-center'>Calculate lenght of word and character</h3>
                <h1 className='head text-center'>{myText.split(" ").length} word and {myText.length} Character</h1>
            </div>
        </div>
    )
}
