function getData() {
    return new Promise((res) => {
        setTimeout(() => {
            res('test');
        }, 2000);
    })
}