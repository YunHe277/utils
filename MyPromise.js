class MyPromise {
    constructor(executor) {
        this.status = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.status !== "pending") return;
            this.status = "fulfilled";
            this.value = value; 
            this.onFulfilledCallbacks.forEach((fn) => fn());
        };

        const reject = (reason) => {
            if (this.status !== "pending") return;
            this.status = "rejected";
            this.reason = reason;
            this.onRejectedCallbacks.forEach((fn) => fn());
        };

        try {
            executor(resolve, reject);  
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                    throw reason;
                };

        return new MyPromise((resolve, reject) => {
            const fulfilledTask = () => {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            };

            const rejectedTask = () => {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            };

            if (this.status === "fulfilled") {
                fulfilledTask();
            } else if (this.status === "rejected") {
                rejectedTask();
            } else {
                this.onFulfilledCallbacks.push(fulfilledTask);
                this.onRejectedCallbacks.push(rejectedTask);
            }
        });
    }
}