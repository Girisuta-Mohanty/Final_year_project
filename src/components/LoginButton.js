import { GoogleLogin } from 'react-google-login';
import axios from 'axios'

const LoginButton = () => {
  const onSuccess = (response) => {
    console.log('Login successful: ', response);
    // Send the access token to your backend server for verification
    // axios.post('http://localhost:3001/auth/google', {
    //     access_token: response.accessToken
    //   }).then((response) => {
    //     console.log('Backend authentication successful: ', response);
    //     // Redirect to the authenticated user's home page
    //   }).catch((error) => {
    //     console.log('Backend authentication failed: ', error);
    //   });
  };

  const onFailure = (error) => {
    console.log('Login failed: ', error);
  };

  return (
    <GoogleLogin
      clientId='234133504708-bes61o661qvdge5qtj8268vhd401b5q7.apps.googleusercontent.com'
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
    //   redirectUri={'http://localhost:3000/auth/google/callback'}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginButton;
