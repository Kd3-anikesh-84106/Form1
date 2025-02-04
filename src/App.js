
import { useState } from 'react';
import './App.css';



function App() {

  const [element,setElement]=useState({firstname:'',lastname:'',email:'',
    address:'',contact:'',gender:'',subject:'',url:''
  
   
  })

  return (
    < div className='Container'>
      <h1>Registration Form</h1>
    <div className='form-container h2'>
    <label htmlFor='firstname'>First Name:</label>
    <input type='text' placeholder='Enter First Name' value={element.firstname} onChange={(e)=>{setElement({...element,firstname:e.target.value})}}  />
    </div>

    <div  className='form-container h2'>
    <label htmlFor='lastname'>Last Name:</label>
    <input type='text' placeholder='Enter Last Name' value={element.lastname} onChange={(e)=>{setElement({...element,lastname:e.target.value})}} />
    </div>

    <div className='form-container h2'>
    <label htmlFor='email'>Email:</label>
    <input type='email' placeholder='Enter Email' value={element.email} onChange={(e)=>{setElement({...element,email:e.target.value})}}  />
    </div>

    <div className='form-container h2'>
    <label htmlFor='firstname'>Address:</label>
    <input type='address' placeholder='Enter Full Address' value={element.address} onChange={(e)=>{setElement({...element,address:e.target.value})}} />
    </div>

    <div className='form-container h2'>
    <label htmlFor='contact'>Contact:</label>
    <input type='text' placeholder='Enter Contact' value={element.contact} onChange={(e)=>{setElement({...element,contact:e.target.value})}} />
    </div>

    <div >
    <label htmlFor='gender'>Gender:</label>
    <input type='radio' name='gender' value={element.gender} onChange={(e)=>{setElement({...element,gender:e.target.value})}} /> Male
    <input type='radio' name='gender' value={element.gender} onChange={(e)=>{setElement({...element,gender:e.target.value})}} /> Female
    <input type='radio' name='gender' value={element.gender} onChange={(e)=>{setElement({...element,gender:e.target.value})}} /> Other
    </div>

    <div className='form-container h2'>
      <label htmlFor='subject'>Subject</label>
      <select name='subject' id='subject' value={element.subject} onChange={(e)=>{setElement({...element,subject:e.target.value})}}>
      <option value='math'>Math</option>
      <option value='science'>Science</option>
      <option value='economics'>Economics</option>
      </select>
    </div>
    <div className='form-container h2'>
      <label htmlFor='resume'>Resume</label>
      <input type='file' placeholder='selec Resume' name='resume' />
    </div>
    <div className='form-container h2'>
      <label htmlFor='url'>URL</label>
      <input type='text' name='url' placeholder='Enter image URL' value={element.url} onChange={(e)=>{setElement({...element,url:e.target.value})}} />
    </div>
    <hr></hr>
    <div>
    <h4>Your First name is - "{element.firstname}"</h4>
    <h4>Your Last name is - "{element.lastname}"</h4>
    <h4>Your email is - "{element.email}"</h4>
    <h4>Your contact number is - "{element.contact}"</h4>
    <h4>Your gender is - "{element.gender}"</h4>
    <h4>Your Subject is - "{element.subject}"</h4>
    <h4>Your Entered URL is - "{element.url}"</h4>
    </div>
    
    </div>
  );
}

export default App;
