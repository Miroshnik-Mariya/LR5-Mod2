//    Напишите функцию, принимающую на вход массив вещественных
//    чисел и возвращающую сумму модулей элементов массива,
//    расположенных после первого элемента равного нулю; 
let result = 0;
let index = 0; 
let res = null; 

function linearArray(arr) {
    if (!Array.isArray(arr)) {
        console.error("Ошибка: параметр функции должен быть массивом.");
        res = "Ошибка ввода";
        return res;
    }

    if (arr.length === 0) {
        console.error("Ошибка: в функцию передан пустой массив");
        res = "Ошибка ввода";
        return res;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.error(`Ошибка: элемент массива - ${arr[i]} - должен быть числом.`);
            res = "Ошибка ввода";
            return res;
        }
    }

    index = arr.indexOf(0);
    if (index == -1) {
        //console.log("В массиве нет нулевых значений");
        res = "В массиве нет нулевых значений";
    }
    else {
        res = 0;

        for (let i = index; i < arr.length; i++) {
            res += Math.abs(arr[i]);
        }
    }
    return res; 
}

function randomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrayRandomInt(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(randomIntInclusive(min, max));
    }
    return array;
}

//массив случайных чисел
let length = prompt("Введите длину массива: ");
const arr = arrayRandomInt(length, -100, 100);
console.log("Массив случайных чисел: ", arr);
result = linearArray(arr);
console.log("Cумма модулей элементов массива, расположенных после первого нулевого элемента: ", result);
console.log(" ");

//готовый массив
console.log(" ");
const arr1 = [1.2, -2, 1 / 2, 0, 3, -12, 56, 0, 3.4, 3];
console.log("Готовый массив: ", arr1);
result = linearArray(arr1);
console.log("Cумма модулей элементов массива, расположенных после первого нулевого элемента: ", result);



//  Напишите функцию, принимающую на вход вещественную
//  прямоугольную матрицу и возвращающую минимум среди сумм
//  элементов диагоналей, параллельных главной диагонали матрицы.

function minDiagonalSum(matrix) {//проверка, что параметр является матрицей
    if (!matrix || matrix.length === 0 || !Array.isArray(matrix)) {
        return `${matrix} - не является матрицей`; 
    }
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (rows == 0 || cols == 0) {//проверка, что матрица не пустотая 
        return "Введена пустая матрица"; 
    }

    for (let i = 0; i < rows; i++) {//проверка, что матрица прямоугольная 
        if (matrix[i].length != cols) {
            return "Матрица непрямоугольная"; 
        }
        for (let j = 0; j < cols; j++) {//проверка, что матрица заполнена числами 
            if (typeof matrix[i][j] !== "number") {
                return "Ошибка: матрица может быть заполнена только числами!"; 
            }
        }
    }

    let minSum = Infinity; 

    for (let startRow = 0; startRow < rows; startRow++) {
        let sum = 0;
        let row = startRow;
        let col = 0;

        while (row < rows && col < cols) {
            sum += matrix[row][col];
            row++;
            col++;
        }
        minSum = Math.min(minSum, sum); 
    }
    for (let startCol = 1; startCol < cols; startCol++) {
        let sum = 0;
        let row = 0;
        let col = startCol;

        while (row < rows && col < cols) {
            sum += matrix[row][col];
            row++;
            col++;
        }
        minSum = Math.min(minSum, sum); 
    }
    return minSum;
}

console.log(" ");
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(matrix);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix));
console.log(" ");

const matrix1 = [
    [10, 2, 3],
    [5, 6, 7],
    [9, 10, 1],
];
console.log(matrix1);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix1));
console.log(" ");

//непрямоугольная матрица
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12, 13]
];
console.log(matrix2);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix2));
console.log(" ");

//пустая матрица 
const matrix3 = [[]];
console.log(matrix3);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix3));
console.log(" ");

//не матрица
const matrix4 = 9;
console.log(matrix4);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix4));
console.log(" ");

//матрица с отрицательными и дробными числами и алгебраическими выражениями 
const matrix5 = [
    [-1, 2.2, 3, 4/4],
    [5, -6, 7.3, -8],
    [-9, 10, 11.1, -12],
];
console.log(matrix5);
console.log("Минимум среди сумм элементов диагоналей, параллельных главной диагонали матрицы: ", minDiagonalSum(matrix5));
console.log(" ");
