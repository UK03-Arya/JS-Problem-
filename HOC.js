function once(fn) {
    let ran = false; // Yeh track rakhega ki function chala ya nahi
    let result;      // Pehli baar ka output yahan save hoga
    
    return function(...args) {
      if (!ran) {       // Agar abhi tak nahi chala...
        ran = true;     // Isko true kar do taaki dubara na chale
        result = fn(...args); // Original function ko run karke result save kar lo
      }
      return result;    // Har baar wahi saved result return karo
    };
  }
  
  // ---- Isko Use Kaise Karein? ----
  
  // 1. Ek normal function banate hain
  function payMoney() {
    console.log("Paisa kat gaya... ₹500");
    return "Payment Success";
  }
  
  // 2. Isko 'once' function ke andar wrap kar dete hain
  const processPaymentOnce = once(payMoney);
  
  // 3. Ab check karte hain:
  console.log(processPaymentOnce()); // Pehli baar: Print hoga "Paisa kat gaya..." -> Return: "Payment Success"
  console.log(processPaymentOnce()); // Doosri baar: Kuch print nahi hoga -> Sidha return: "Payment Success"
  console.log(processPaymentOnce()); // Teesri baar: Kuch print nahi hoga -> Sidha return: "Payment Success"