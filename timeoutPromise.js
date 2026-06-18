function timeoutPromise(promise, timeout) {
    const retryPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error())
        }, timeout)
    })

    return Promise.race(promise, retryPromise)
}