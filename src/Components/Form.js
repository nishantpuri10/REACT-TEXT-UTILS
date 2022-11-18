import React, { useState } from 'react';


export default function Form(props) {
  
  const up = ()=>{
    setText(text.toUpperCase())
  }

  const low = ()=>{
    setText(text.toLowerCase())
  }
  
 
  ////target gives you the element that triggered the event. So, event. target. value retrieves the value of that element (an input field, in your example).
  const change=(event)=>{
    setText(event.target.value);
  }

  const clear = ()=>{
    setText("");
  }

  const Downloadtext = ()=>{
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("mybox").value],{
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }

  const change2=(event)=>{
    setText2(event.target.value);
  }
  
  const search = ()=>{
    console.log(searchtext);
    
  }
  
                            
  const [text, setText] = useState('');
  const [searchtext, setText2] = useState('');

  // const [mystyle , setstyle ] = useState({
  //           backgroundColor : 'white',
            
  // });  
  // const [modetext,setmodetext] = useState('Enable Dark Mode')

  //  const changemode = ()=>{
  //       if(mystyle.backgroundColor == 'white'){
  //         setstyle({
  //           backgroundColor:'#2C2A2A',
  //           color:'white',
           
  //         })

  //         setmodetext('Enable Light Mode')
  //       }
  //       else{
  //         setstyle({
  //           backgroundColor:'white',
            
  //         })
  //         setmodetext('Enable Dark Mode')
  //       }
         
  //  }

  
  
  
  
  
  
  return (
    <>
    
    <div style={{color: props.mode==='dark'?'white':'#042743',border:'7px solid black',width:'700px',borderRadius:'71px',position:'relative',top:'30px'}}>
    {/* <div style={mystyle} > */}
    <label htmlFor="mybox">Type your text</label><br />
    <textarea id="mybox" cols={50} rows={5} value={text} onChange={change}/><br/>
    <button type="button" class="btn btn-outline-primary" onClick={up}>Convert to UPPERCASE</button> &nbsp;
    <button type="button" class="btn btn-outline-primary" onClick={clear}>Clear Text</button>&nbsp;
    <button type="button" class="btn btn-outline-primary" onClick={low}>Convert to lowercase</button> &nbsp;
    <button type="button" class="btn btn-outline-danger" onClick={Downloadtext}>Download Text</button> &nbsp;<br></br><br></br>
    <input id="searchinput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchtext} onChange={change2} style={{display:'inline',width:'150px'}}  />
    <button className="btn btn-outline-success" type="submit" onClick={search} style={{position:'relative',bottom:'3px'}} >Search</button>
    {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{position:'relative',left:'510px'}} onClick={changemode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{modetext}</label>
      </div> */}



    <br></br><br></br>
    
    <h5>Your Text Summary</h5>
    <p>There are <span style={{color:'red'}}>{(text === undefined || text === "") ? 0 : text.trim().split(/\s+/).length} </span> words and <span style={{color: 'red'}}> {text.length} </span>characters</p>
    <p><span style={{color:'blue'}}>{0.008 * text.split(" ").length } </span>minutes read</p>
  
    {/* </div> */}

    </div>
    </>
  )
}
