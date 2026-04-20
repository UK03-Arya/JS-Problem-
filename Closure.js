function createATM(pin) {
    let balance = 0; // Private Variable (Koi bahar se chhed nahi sakta)

    return function (enteredPin) {
        // Ye inner function ek closure hai
        if (enteredPin === pin) {
            return {
                deposit: function (amount) {
                    balance += amount;
                    return `Paise jama ho gaye! Current Balance: ${balance}`;
                },
                withdraw: function (amount) {
                    if (amount > balance) return "Balance kam hai!";
                    balance -= amount;
                    return `Paise nikal gaye! Bacha hua balance: ${balance}`;
                }
            };
        } else {
            return "Galat PIN! Access Denied.";
        }
    };
}

// --- Yaad rakhne wala part (Usage) ---

const myAccount = createATM(1234); // PIN set kar diya

const login = myAccount(1234); // Sahi PIN dala toh access mila
console.log(login.deposit(5000));
console.log(login.withdraw(2000));

// Security Check:
console.log(myAccount.balance); // undefined (Safe hai!)