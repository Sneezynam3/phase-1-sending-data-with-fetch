// Add your code here
function submitData (userName, userEmail){
  return fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(response => response.json())
        .then(data => {
            // Access the response data here
            console.log(data);
            const newId = data.id;
            const idElement = document.createElement('p');
            idElement.textContent = `New ID: ${newId}`;
            document.body.appendChild(idElement);
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.log(error);
            const errorElement = document.createElement('p');
            errorElement.textContent = "Unauthorized Access";
            document.body.appendChild(errorElement);
          });
}

