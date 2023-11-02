import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison, binarySearchInRotatingSequence, binarySearchForSpacialIndex, binarySearchInSequenceOfUnknownLength, binarySearchInSequenceOfUnknownLengthWithWhile, interpolationSearch, findInMatrix } from "./algorithmsCategories/search/BinarySearch";
import { Cryptographic, collisionMethod } from "./algorithmsCategories/search/HashTable";
import { BubbleSort } from "./algorithmsCategories/sorting/ComparativeSorting";
import { findKMinimum, findKMinimumByMethodOfGroupOf5, findSecondMinimum, minMax, minMaxByComparativeMethod, minMaxWithUsingDivideAndConquerApproach } from "./algorithmsCategories/sorting/MinMax";
/////////////////////////////////////////////binary search
const binaryArray = [10, 20, 30, 40, 50, 60];
const spacialIndexBinaryArray = [-1, 0, 1, 2, 4, 6, 7];
const rotateBinaryArray = [30, 40, 50, 60, 70, 10, 15, 20, 25];
const matrix = [[10, 20, 30, 40], [12, 27, 50, 60], [20, 31, 61, 70], [30, 45, 70, 90]];
console.log(recBinarySearch(binaryArray, 20));
console.log(iterativeBinarySearch(binaryArray, 20));
console.log(binarySearchWithLessComparison(binaryArray, 20));
console.log(binarySearchInRotatingSequence(rotateBinaryArray, 20));
console.log(binarySearchForSpacialIndex(spacialIndexBinaryArray));
console.log(binarySearchInSequenceOfUnknownLength(binaryArray, 20));
console.log(binarySearchInSequenceOfUnknownLengthWithWhile(binaryArray, 20));
console.log(interpolationSearch(binaryArray, 20));
console.log(findInMatrix(matrix, 40));
//////////////////////////////////////////hash table
const hashMethod = (x) => x % 5;

const cryptographic1 = new Cryptographic([23, 42, 37, 26, 41], 5, hashMethod, collisionMethod.OPEN_ADDRESS);
console.log(cryptographic1.hashTable);

const cryptographic2 = new Cryptographic([24, 32, 47, 51, 60, 27, 76], 5, hashMethod, collisionMethod.CHAINING);
console.log(cryptographic2.hashTable);
///////////////////////////////////////////sort
const searchArray = [2, 6, 3, 5, 9, 0, -1];
console.log(minMax(searchArray));
console.log(minMaxWithUsingDivideAndConquerApproach(searchArray));
console.log(minMaxByComparativeMethod(searchArray));
console.log(findSecondMinimum(searchArray));
console.log(findKMinimum(searchArray, 2));
console.log(findKMinimumByMethodOfGroupOf5(searchArray, 2));
/////////////////////////////////////////comparativeSort
const comparetiveSortArray = [-1, 10, 34, 87, 2, 5, 0, 99];
console.log(BubbleSort(comparetiveSortArray));