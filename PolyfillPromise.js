// --- Polyfill Code ---
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        let completedCount = 0;

        if (promises.length === 0) {
            resolve(result);
            return;
        }

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((value) => {
                    result[i] = value; // Sahi position maintain karna
                    completedCount++;

                    if (completedCount === promises.length) {
                        resolve(result); // Sab khatam hone par final resolve
                    }
                })
                .catch((error) => {
                    reject(error); // Ek bhi fail toh sab fail
                });
        }
    });
}

// --- Console Output Check ---

const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Slow (2s)"), 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Fast (1s)"), 1000);
});

const p3 = "Normal Value"; // Non-promise value

console.log("Wait kar rahe hain...");

myPromiseAll([p1, p2, p3])
    .then((data) => {
        console.log("Success Result Array:");
        console.log(data);
    })
    .catch((err) => {
        console.log("Error occurred:", err);
    });