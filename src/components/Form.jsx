import React from "react";

function Form() {
    return(
    <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-orange-500 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-xl p-10 "> 
         <form>
    <div className="">  
      <div>
    <label htmlFor="firstName" className="form-label"> first Name</label>
    <input type="text" name="firstName" id="firstName" />
      </div>
      <div>
    <label htmlFor="lastName"> last Name</label>
    <input type="text" name="lastName" id="lastName" />
      </div>
      <div>
    <label htmlFor="middleName"> middleName </label>
    <input type="text" name="middleName" id="middleName" />
      </div>
    </div>


  <div>
    <label htmlFor="gender">
        <input type="radio" name="gender" value="male"  id="male"/> Male
    </label>
    </div> 
<div>
    <label htmlFor="gender">
        <input type="radio" name="gender" value="female"  id="female"/> Female
    </label>
</div>
<div>
    <label htmlFor="dateOfBirth">Date of Birth</label>
    <input type="date" />
</div>
<div>
    <label htmlFor="phone">Phone Number</label>
    <input type="tel" placeholder="xxx-xxx-xxxx" />
</div>
<div>
    <label htmlFor="email">Email</label>
    <input
    type="email"
    name="email"
    id="email"
    placeholder="philsgarment@gmail.com"
    />
</div>
<div>
    <button type="submit">Register</button>
</div>

         </form>
      </div>
    </div>
    );
    
}

export default Form;