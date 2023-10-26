import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison, binarySearchInRotatingSequence, binarySearchInSequenceOfUnknownLength } from "./algorithmsCategories/search/BinarySearch";

const binaryArray = [10, 20, 30, 40, 50, 60];
const rotateBinaryArray = [30, 40, 50, 60, 70, 10, 15, 20, 25];
console.log(recBinarySearch(binaryArray, 20));
console.log(iterativeBinarySearch(binaryArray, 20));
console.log(binarySearchWithLessComparison(binaryArray, 20));
console.log(binarySearchInRotatingSequence(rotateBinaryArray, 20));
console.log(binarySearchInSequenceOfUnknownLength(binaryArray, 20))