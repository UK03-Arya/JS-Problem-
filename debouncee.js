function debounce(func, delay) {
    let timer;

    return function (...args) {
        // Agar pehle se koi timer chal raha hai, toh use cancel kar do
        clearTimeout(timer);

        // Naya timer start karo
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example Use Case:
const searchData = (query) => {
    console.log("Searching for:", query);
};

const optimizedSearch = debounce(searchData, 500);

// Jab user type karega, optimizedSearch call hoga 
// par console par 500ms tak rukne ke baad hi dikhega.