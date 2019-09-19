const promise = new Promise((resolve, reject) => {
    console.log("in primoise");
    // try {
    //     throw new Error("reject:test");
    // } catch (error) {
    //     return reject(error);
    // }
    return reject(new Error("reject；test"));
});

function timeout(ms) {
    setTimeout(() => {
        console.log("in timeout");
        promise
            .then(
                () => {
                    console.log("in promise resolve");
                },
                err => {
                    console.log("in promise reject");
                }
            )
            .catch(err => {
                console.log("in promise catch reject");
            });
    }, ms);
}

timeout(100);
