function promiseAllSettled(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then((value) => {
                    result[index] = {
                        status: 'fulfilled',
                        value
                    };
                })
                .catch((err) => {
                    result[index] = {
                        status: 'rejected',
                        err
                    };
                })
                .finally(() => {
                    count++;
                    if (count === promises.length) {
                        resolve(result)
                    }
                })
        })
    })
}