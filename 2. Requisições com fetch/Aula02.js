fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    body: JSON.stringify({
        title:'Jhon ',
        body:'Luiz Sousa Santos',
        userId:10
    }),
    headers:{
        'content-Type' : 'application/Json; chasert=UTF-8'
    }
})
   
.then(response => response.json())
      .then(json => console.log(json))




