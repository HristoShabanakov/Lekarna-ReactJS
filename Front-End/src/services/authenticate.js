import {setCookie} from '../utils/cookie';

const authenticate = async(url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
             method: 'POST',
             body: JSON.stringify(body
             ),
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
     });
 
 
     const response = await promise.json();
     const token = response.token;
     setCookie("LekarnaToken", token);
     
     if (response) {
         console.log(response);
         onSuccess({
             userName: response.userName,
             id: response.id
         });
     } else{
         onFailure();
     }
 
     } catch(e) {
         onFailure(e);
     }
}

export default authenticate