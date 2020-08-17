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
 
     
      //const authToken = promise.headers.get('Authorization');
      //console.log(authToken);
     //document.cookie = `x-auth-token'=${data}`
 
     const response = await promise.json();
     const token = document.cookie = `Lekarna-token'=${response}`;
 
     console.log(response);
     
     if (response) {
         onSuccess({
             username: response.username,
             id: response._id
         });
     } else{
         onFailure();
     }
 
     } catch(e) {
         onFailure(e);
     }
}

export default authenticate