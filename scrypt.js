const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, index) {
  delete array[index];
  return array.filter((item) => item != undefined);
}
console.log(removeElement(array, 4));
