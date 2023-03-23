
  export const authenticate = (data, next) => {
    console.log(`authenticate ${data}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data));
      // console.log(localStorage.jwt)
      next();
    }
  };
  
  export const signout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
      // next();
      window.location.reload();
      return fetch(`http://localhost:3001/user/signout`, {
        method: 'GET',
      })
        .then((response) => console.log('signout success'))
        .catch((err) => console.log(err));
    }
  };



  
  
  export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('jwt')) {
      return JSON.parse(localStorage.getItem('jwt'));
    } else {
      return false;
    }
  };