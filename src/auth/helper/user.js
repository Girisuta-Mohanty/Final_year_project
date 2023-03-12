export const getUser = (emailId) => {
    return fetch(`http://localhost:3001/user/${emailId}`, {method: 'GET'}).then((response) => { // console.log('RES :', response);
        return response.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getAllUser = () => {
    return fetch(`http://localhost:3001/user/allusers`, {method: 'GET'}).then((response) => {
        return response.json();
    }).catch((error) => {
        console.log(error)
    })
}

export const updateProfile = (emailId, token, skill) => {
    console.log(`LINE NUMBER 4`);
    return fetch(`http://localhost:3001/user/${emailId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(skill)
    }).then((response) => {
        return response.json();
    }).catch((error) => console.log(error));
};

export const uploadFile = (classId, formData) => {
    return fetch(`http://localhost:3001/classroom/${classId}/files`, {
        method: 'POST',
        body: formData
    })  .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
