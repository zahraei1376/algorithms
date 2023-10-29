export const minMax = (array) => {
    let min = array[0];
    let max = array[0];

    for (const element of array) {
        if (element < min) {
            min = element;
        } else if (element > max) {
            max = element
        }
    }

    return { min, max }
}