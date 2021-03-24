// 1
function makeCounter(num) {
    num = 0;
    return function(count){
        return num += count;
    };    
}

var counter = makeCounter();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

// 2

const getUpdatedArr = (() => {
    let arr = [];
    return (val) => {
        if (!val) {
           arr = [];
        } else {
            arr.push(val);
        }
        return arr;
    };
  })();


