/**
 * Implements the iterable protocol
 */
export class Matrix {
    private readonly data: any;

    constructor(inMatrix) {
        this.data = inMatrix;
    }

    get(row, column) {
        if (row >= this.data.length ||
            column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }
        return this.data[row][column];
    }

    set(row, column, value) {
        if (row >= this.data.length ||
            column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }
        this.data[row][column] = value;
    }

    [Symbol.iterator]() {
        let nextRow = 0;
        let nextCol = 0;
        return {
            next: () => {
                if (nextRow === this.data.length) {
                    return {done: true};
                }
                const currVal = this.data[nextRow][nextCol];
                if (nextCol === this.data[nextRow].length - 1) {
                    nextRow++;
                    nextCol = 0;
                } else {
                    nextCol++;
                }
                return {value: currVal};
            }
        };
    }
}

const matrix2x2 = new Matrix([
    ['11', '12'],
    ['21', '22']
]);
for (const val of matrix2x2) {
    console.log(val);
}

// spread operator
const flattenedMatrix = [...matrix2x2];
console.log(flattenedMatrix);

// deconstructing
const [oneOne, oneTwo, twoOne, twoTwo] = matrix2x2
console.log(oneOne, oneTwo, twoOne, twoTwo)


