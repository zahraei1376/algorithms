export const recBinarySearch = (array, x) => {
    const midIndex = Math.floor(array.length / 2)
    const midValue = array[midIndex];
    if (midValue === x) return midValue;
    if (midValue > x) {
        return recBinarySearch(array.slice(0, midIndex), x);
    } else {
        return recBinarySearch(array.slice(midIndex + 1), x)
    }
}