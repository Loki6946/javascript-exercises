const findTheOldest = function(person) {
  const today = new Date().getFullYear();
  return person.reduce((prev, curr) => {
    if (prev.yearOfDeath - prev.yearOfBirth > curr.yearOfDeath - curr.yearOfBirth) {
      return prev;
    } else if (!prev.yearOfDeath || !curr.yearOfDeath) {
      return today - prev.yearOfBirth > today - curr.yearOfBirth ? prev : curr;
    } else {
      return curr;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
