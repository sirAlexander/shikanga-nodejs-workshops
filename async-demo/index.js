// Asynchronous
console.log('Before');
getUser(1, (user) => {
    console.log('User', user);

    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);

        geCommits(repo, (commits) => {
            // CALLBACK HELL!
        });
    });
});
console.log('After');

// Synchronous version
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = geCommits(repos[0]);
console.log('After');


// The 3 patterns used to deal with asynchronous code
// 1. Callbacks
// 2. Promises
// 3. Async/await

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}