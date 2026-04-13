function debounce(func, delay) {
    let timer;

    return function (...args) {
        // Ye tab chalega jab user type kar raha hai
        console.log("Timer reset ho raha hai... (Wait for " + delay + "ms)");

        clearTimeout(timer);

        timer = setTimeout(() => {
            // Ye tab chalega jab delay poora ho jayega
            console.log("--- Time's up! Function execute ho raha hai ---");
            func.apply(this, args);
        }, delay);
    };
}

// --- Test karne ka tarika ---

const mySearch = (query) => {
    console.log("API Call bhej di: ", query);
};

const processChange = debounce(mySearch, 1000); // 1 second ka wait

// Maan lo user ne "React" type kiya jaldi-jaldi
processChange("R");
processChange("Re");
processChange("Rea");
processChange("Reac");
processChange("React");