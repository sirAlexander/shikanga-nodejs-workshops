console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayCommits(commits){
    console.log('Commits', commits);
}

function displayRepositories(repos){
    console.log('Repos', repos);
    getCommits(repos[0], displayCommits);
}

function displayUser(user){
    console.log('User', user);
    getRepositories(user.gitHubUsername, displayRepositories);
}




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

function getCommits(repo, callback){
    setTimeout(() => {
        console.log('Getting repository commits...');
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}