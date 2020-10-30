import axios from 'axios';

const getAllUsers = () => new Promise((resolve, reject) => {
    axios.get('http://192.168.1.76:8001/users')
      .then((result) => resolve(result))
      .catch((errorFromUserData) => reject(errorFromUserData));
});

const loginUser = (userToAdd) => axios.post('http://192.168.1.76:8001/users/login', userToAdd);

const signUp = (userToSignUp) => axios.post('http://192.168.1.76:8001/users/signUp', userToSignUp);

const getUser = (accessToken) => new Promise((resolve, reject) => {
  axios.get('http://192.168.1.76:8001/users/loggedInUser', {
    headers: {
      token: accessToken
    }
  })
  .then((result) => resolve(result))
  .catch((errorFromGetUser) => reject(errorFromGetUser));
});


export default { getAllUsers, loginUser, signUp, getUser };