import React, { useState } from 'react';

const Contact =()=>{
  const[data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    Message:'',
  });
  const InputEvent=(event)=>{
 const {name,value}= event.target;
 setData((perVal)=>{
   return{
     ... perVal,
     [name] : value,
   };
 });
  };
const formSubmit = (e)=>{
 e.preventDefault();
 alert(
   `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email},Here is wahat I want to say ${data.Message}`
   );
};
    return(
        <>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>   
        </div>
        <div className='container contact-div'>
            <div className='row'>
             <div className='col-md-6 col-10 mx-auto'>
                 <form onSubmit={formSubmit}>
                 <div class="mb-3">
  <label for="exampleFormControlInput1" 
  class="form-label">Full name</label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
  name='fullname'
  value={data.fullname} 
  onChange={InputEvent}
  placeholder="Enter Your Name"/>
</div>
               <div class="mb-3">
  <label for="exampleFormControlInput1" 
  class="form-label">Phone</label>
  <input 
  type="number" 
  class="form-control" 
  id="exampleFormControlInput1"
  name='phone'
  value={data.phone} 
  onChange={InputEvent}
  placeholder="Enter Your Number"/>
</div>
               <div class="mb-3">
  <label for="exampleFormControlInput1" 
  class="form-label">Email address</label>
  <input 
  type="email" 
  class="form-control" 
  name='email'
  id="exampleFormControlInput1" 
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  name='Message'
  value={data.msg} 
  onChange={InputEvent}
  ></textarea>
</div>
 <div class="col-12">
 <button type="button" class="btn btn-outline-primary" onClick={formSubmit}>Submit form</button>
  </div>
                 </form>
             </div>
            </div>
        </div>
        </>
    );
};
export default Contact;