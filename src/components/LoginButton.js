import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {authenticate} from '../auth/helper';


function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64).split("").map(function (c) {
        return "%" + (
            "00" + c.charCodeAt(0).toString(16)
        ).slice(-2);
    }).join(""));

    return JSON.parse(jsonPayload);
}

const onFailure = (error) => { // handle failed Google Sign-In
    console.log(error);
};

const GoogleSignInButton = () => {
    return (
        <GoogleOAuthProvider clientId="234133504708-bes61o661qvdge5qtj8268vhd401b5q7.apps.googleusercontent.com">
            <GoogleLogin onSuccess={
                    async credentialResponse => {
                        console.log(credentialResponse);
                        const responsePayload = decodeJwtResponse(credentialResponse.credential);
                         const email = responsePayload.email;
                        // console.log(responsePayload.token)
                        // if (email.endsWith("@iiit-bh.ac.in")) {
                            try {
                                const response = await axios.post('http://localhost:3001/auth/google', {token: credentialResponse.credential});
    
                                authenticate(( response.data),()=>{
                                    // console.log(`sd ${response.data.user.email}`)
                                    console.log("yes i have set the key value pair")
                                    window.location.reload();
                                })
    
                            } catch (error) {
                                console.log(error);
       
                            }
                            alert('Login successFul');
                            // navigate('/afterlogin');
                        // } else {
                        //     alert('Please login using Institute Email-id');

                        // }

                     
                       
                    }
                    
                }
                onError={
                    () => {
                        {
                            console.log('Login Failed');
                        }
                    }
                }/>

        </GoogleOAuthProvider>
    );
};

export default GoogleSignInButton;
