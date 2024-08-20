let count = document.getElementById('count');
let number = Number(count.innerHTML);

const addNum = (n = 1) => {
    number += n;
    count.innerHTML = number;
}

const minNum = (n = 1) => {
    number -= n;
    count.innerHTML = number;
}

const reset = () => {
    number = 0;
    count.innerHTML = number;
}

// Test cases
// addNum();
// addNum(5);
// reset();
// minNum();
// minNum(5);
// reset();
// console.log(number);