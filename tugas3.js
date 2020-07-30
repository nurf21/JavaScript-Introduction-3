fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showName(data));

const showName = (data) => {
    data.forEach(value => console.log(value.name));
};