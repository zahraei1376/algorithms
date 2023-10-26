import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison, binarySearchInRotatingSequence, binarySearchForSpacialIndex, binarySearchInSequenceOfUnknownLength, binarySearchInSequenceOfUnknownLengthWithWhile, interpolationSearch } from "./algorithmsCategories/search/BinarySearch";

const binaryArray = [10, 20, 30, 40, 50, 60];
const spacialIndexBinaryArray = [-1, 0, 1, 2, 4, 6, 7];
const rotateBinaryArray = [30, 40, 50, 60, 70, 10, 15, 20, 25];
console.log(recBinarySearch(binaryArray, 20));
console.log(iterativeBinarySearch(binaryArray, 20));
console.log(binarySearchWithLessComparison(binaryArray, 20));
console.log(binarySearchInRotatingSequence(rotateBinaryArray, 20));
console.log(binarySearchForSpacialIndex(spacialIndexBinaryArray));
console.log(binarySearchInSequenceOfUnknownLength(binaryArray, 20));
console.log(binarySearchInSequenceOfUnknownLengthWithWhile(binaryArray, 20));
console.log(interpolationSearch(binaryArray, 20));