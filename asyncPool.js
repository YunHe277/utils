async function asyncPool(limit, tasks, iteratorFn) {
    const result = new Array(tasks.length);
    let index = 0;
    const workers = [];
    async function worker() {
        while(index < tasks.length) {
            const currentIndex = index;
            result[currentIndex] = iteratorFn(tasks[currentIndex])
            index++;
        }
    }

    for (let i = 0; i < Math.min(limit, taskss.length); i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    return result
}