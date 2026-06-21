function requestWithCancel(url, options = {}) {
    const controller = new AbortController();
    const promise = fetch(url, {
        ...options,
        signal: controller.signal
    });
    return {
        promise,
        cancel: () => controller.abort()
    };
}
