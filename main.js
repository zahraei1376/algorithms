import { recBinarySearch, iterativeBinarySearch, binarySearchWithLessComparison } from "./algorithmsCategories/search/BinarySearch";

const binaryArray = [10, 20, 30, 40, 50, 60];
console.log(recBinarySearch(binaryArray, 70));
console.log(iterativeBinarySearch(binaryArray, 70));
console.log(binarySearchWithLessComparison(binaryArray, 70));