function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item).then(resolve, reject)
        })
    })
}