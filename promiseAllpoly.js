Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    // Edge case: Agar array empty hai
    if (promises.length === 0) {
      return resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      const currentItem = promises[i];

      // Check karo: Kya currentItem ek Promise hai?
      // (Isse hum 'thenable' check kehte hain)
      if (currentItem && typeof currentItem.then === 'function') {
        
        // Agar Promise hai toh .then() call karo
        currentItem
          .then((value) => {
            handleResult(value, i);
          })
          .catch((err) => {
            // "Fail Fast" - Ek bhi error toh pura reject
            reject(err);
          });
          
      } else {
        // Agar normal value hai (string, number, etc.) toh direct handle karo
        handleResult(currentItem, i);
      }
    }

    function handleResult(value, index) {
      results[index] = value; // Order maintain rakhta hai
      completedCount++;

      // Jab saare resolve ho jayein tabhi final resolve call karo
      if (completedCount === promises.length) {
        resolve(results);
      }
    }
  });
};