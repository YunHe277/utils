function retry(fn, times, delay) {
    return new Promise((resolve, reject) => {
        function run(currentTimes) {
            fn()
                .then(resolve)
                .catch((err) => {
                    if(currentTimes < 0) {
                        reject(err);
                        return;
                    }

                    setTimeout(() => {
                        run(currentTimes - 1)
                    }, delay)
                })
        }

        run(times);
    })
}