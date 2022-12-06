const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, index) {
   return array.filter((item) => item != index);
}
console.log(removeElement(array, 4));
