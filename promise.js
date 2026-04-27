// Teen simple promises jo thoda delay lete hain
const task1 = () => new Promise(res => setTimeout(() => res("Task 1 Done"), 1000));
const task2 = () => new Promise(res => setTimeout(() => res("Task 2 Done"), 1000));
const task3 = () => new Promise(res => setTimeout(() => res("Task 3 Done"), 1000));

const executeSequentially = () => {
    console.log("Starting...");

    task1()
        .then((res1) => {
            console.log(res1);
            return task2(); // Agla promise return kiya
        })
        .then((res2) => {
            console.log(res2);
            return task3(); // Usse agla promise return kiya
        })
        .then((res3) => {
            console.log(res3);
            console.log("All tasks finished!");
        })
        .catch((err) => {
            console.error("Koi task fail ho gaya:", err);
        });
};

executeSequentially();