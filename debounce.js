function debounce (fn, delay, immediate = false) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer) 
        }
        if (!timer && immediate) {
            fn.apply(this, args)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }

    }
}