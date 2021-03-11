const promiseTime = new Promise((resolve, reject) => setTimeout(() => resolve('EndPromise'), 5000));

console.log('Begin');

promiseTime.then((data) => console.log(data));

promiseTime.then(console.log);

promiseTime.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)

