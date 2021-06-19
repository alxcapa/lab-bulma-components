import React from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/formField';
import CoolButton from '../navbar/CoolButton';

function SignUp(){
    return (
        <div>
            <Navbar />
            <form>  
            <FormField label='Name' type="text" placeholder="e.g Alex Smith" />
            <FormField label='Email' type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label='Password' type="password" placeholder="*********"/>
            <CoolButton>Sign Up</CoolButton>
            </form>
        </div>
    )
}
export default SignUp