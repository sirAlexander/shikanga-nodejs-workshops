console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// The 3 patterns used to deal with asynchronous code
// 1. Callbacks
// 2. Promises
// 3. Async/await

function getUser(id){
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return { id: id, gitHubUsername: 'mosh' };
    }, 2000);
}