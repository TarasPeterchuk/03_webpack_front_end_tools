localStorage.clear();
localStorage.setItem('name', JSON.stringify('tom'));
localStorage.setItem('hobbies', JSON.stringify([1, 2, 4]));
localStorage.setItem('age', JSON.stringify(17));
// console.log(localStorage.getItem('hobbies'));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};
console.log(getLocalStorageData());
