export const getUser = (emailId) => {
    return fetch(`http://localhost:3001/user/${emailId}`, {
      method: 'GET',
    })
      .then((response) => {
        // console.log('RES :', response);
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };