import React, { useState } from 'react'
import { isAuthenticated } from '../auth/helper';
import { updateProfile } from '../auth/helper/user';
import Base from './Base';
// import { updateProfile } from '../auth/helper/user';

function UpdateProfile() {

    const [skill, setSkill] = useState('');

    const { user, token } = isAuthenticated();
    const onSubmit = (event) => {
        console.log(`user ${user.email}`)
        event.preventDefault();
      
       
        //backend request
        updateProfile(user.email, token, { skill }).then((data) => {
          if (data.error) {
           console.log("error occured")
          } else {
            console.log("hogya occured")
            setSkill('');
          }
        });
      };
  return (
    <Base>
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center"}}> 
        {/* <h1>Add Skill!</h1> */}
        <input type="text" placeholder='Add a Skill' className="centered-placeholder" value={skill}
        onChange={(e) => setSkill(e.target.value)}/>
        <button type="submit" style={{ marginRight: "200px"}}className="signin1" onClick={onSubmit}>Add </button>
</div>
</Base>
  )
}

export default UpdateProfile