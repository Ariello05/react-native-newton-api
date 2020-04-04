//import { Methods } from '../constants/methods.js';
/*prop types for method*/

const fetchData = (method, arg, callback) => {
  if (arg === '') {
    callback('');
    console.log('back');
    return;
  }

  return fetch(`https://newton.now.sh/${method}/${arg}`) //derive
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      callback(responseJson.result);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default fetchData;
