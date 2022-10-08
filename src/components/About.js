import React,{useState} from 'react'


export default function About() {

let [style,setStyle]=useState({
    color:'black',
    backgroundColor: 'white',
   
})

     let  [btnTxt, setbtnTxt] = useState('Enable light Mode')
   const toggleStyle=()=>{
    
        if(style.color=='white'){
           setStyle(
            {
                color:'black',
                backgroundColor: 'white',
            }
           )
           setbtnTxt("Enable dark mode")
        }
        else{
            setStyle({
                color:'white',
                backgroundColor: 'black',
            })
            setbtnTxt("Enable light mode")
        }

    }
  return (
    <div className='container my-4' style={style}>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label htmlFor="basic-url" className="form-label">Your vanity URL</label>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text">.00</span>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
</div>

<div className="input-group">
  <span className="input-group-text">With textarea</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
<button className="btn btn-primary my-4" onClick={toggleStyle}>{btnTxt}</button>
    </div>
    
  )
}
