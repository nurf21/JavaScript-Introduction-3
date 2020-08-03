fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data.forEach(value => console.log(value.name)))
    .catch((error) => console.log(error));