// Using Axios
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response);
        // api();
        for (const post of response.data){
            console.log(post.id);   
        }
  })
  .catch(error => {
    console.log(error);
  });

// function api(){
//     for (const post of response.data){
//         console.log(post.id);   
//     }
// }

// Using HTTPS Request

