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

    // uper case
    const UpperCase=()=>{
        let newText=myText.toUpperCase();
        setMyText(newText);
    }

    // capitalize
      const Capitalize=()=>{
      let newText=myText.replace(/(?:^|\s)\s/g, function (a){return a.toUpperCase();});
        setMyText(newText);
    }
    
    // revers
     const reversCase=()=>{
        let newText=myText.split('').reverse().join('');
        setMyText(newText);
    }

     // clear
     const clear=()=>{
       
        setMyText('');
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-uppercase text-center'>Enter the text to analyze below</h1>
            <div className='line'></div>

            <form>
                <div class="mb-3 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter your Text:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                    onChange={Onchange} value={myText} rows="8"></textarea>

                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button type="button" class="btn btn-color me-3" onClick={LowerCase}>Lower case</button>
                    <button type="button" class="btn btn-color me-3" onClick={UpperCase}>UPPER CASE</button>
                    <button type="button" class="btn btn-color me-3" onClick={Capitalize}>Capitalize</button>
                    <button type="button" class="btn btn-color me-3" onClick={reversCase}>Reverse</button>
                    <button type="button" class="btn btn-color me-3" onClick={clear}>Clear</button>
                </div>
            </form>

            <div className='mt-5'>
                <h3 className='text-center'>Calculate lenght of word and character</h3>
                <h1 className='head text-center'>{myText.split(" ").length} word and {myText.length} Character</h1>
            </div>
        </div>
    )
}
