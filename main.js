import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison, binarySearchInRotatingSequence, binarySearchForSpacialIndex, binarySearchInSequenceOfUnknownLength, binarySearchInSequenceOfUnknownLengthWithWhile, interpolationSearch } from "./algorithmsCategories/search/BinarySearch";
import { Cryptographic, collisionMethod } from "./algorithmsCategories/search/HashTable";
/////////////////////////////////////////////
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
//////////////////////////////////////////
const hashMethod = (x) => x % 5;

const cryptographic1 = new Cryptographic([23, 42, 37, 26, 41], 5, hashMethod, collisionMethod.OPEN_ADDRESS);
console.log(cryptographic1.hashTable);

const cryptographic2 = new Cryptographic([24, 32, 47, 51, 60, 27, 76], 5, hashMethod, collisionMethod.CHAINING);
console.log(cryptographic2.hashTable);
///////////////////////////////////////////