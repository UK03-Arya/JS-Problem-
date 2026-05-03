function once(fn) {
    let hasBeenCalled = false; // Yeh yaad rakhega ki function chala ya nahi
    let result;                // Pehli baar ka result store karne ke liye

    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;   // Darwaza band kar do
            result = fn(...args);   // Asli function ko chalao
            return result;          // Result bhej do
        } else {
            return undefined;       // Dusri baar se hamesha undefined
        }
    }
}