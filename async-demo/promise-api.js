
const pResolved = Promise.resolve({ id: 1 });
pResolved.then(result => console.log(result));

const pRejected = Promise.reject(new Error('reason for rejection...'));
pRejected.catch(error => console.log(error));