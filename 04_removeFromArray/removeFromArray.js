const removeFromArray = function(array, ...toBeRemoved) {
  for (const num of toBeRemoved) {
    for (let i = 0; i < array.length; i++) {
      const index = array.indexOf(num);
      if (index != -1) {
        array.splice(index, 1);
      }
    }   
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
