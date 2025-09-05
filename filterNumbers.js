// 筛选数组中大于10的数字
function filterNumbersGreaterThanTen(arr) {
    return arr.filter(num => num > 10);
}

// 示例数组
const numbers = [100, 200, 3, 400, 5, 6, 700];

// 筛选大于10的数字
const filteredNumbers = filterNumbersGreaterThanTen(numbers);

// 输出结果
console.log('原始数组:', numbers);
console.log('筛选后（大于10）:', filteredNumbers);

// 导出函数供其他模块使用
module.exports = { filterNumbersGreaterThanTen };