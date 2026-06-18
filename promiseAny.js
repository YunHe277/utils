function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        const errs = [];
        let count = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then(resolve, (err) => {
                    errs[index] === err;
                    count++;

                    if (count === promises.length) {
                        reject(errs)
                    }
                })
        })
    })
}