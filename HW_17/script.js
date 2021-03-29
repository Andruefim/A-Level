
class CustomString {
    constructor(string) {
        this.string = string;
    }
    reverse(string){
        const reversedStrArr = [];
        for(let char of string){
            reversedStrArr.unshift(char);
        }
        return reversedStrArr.join('');
    }
    ucFirst(string){
        let first = string.slice(0,1);
        let last = string.slice(1, string.length);
        return first.toUpperCase() + last;
    }
    ucWords(string){
        let strArray = [];
        let resultArray = [];
        strArray = string.split(' ');
        for (let value of strArray){
            let start = value.slice(0,1);
            let end = value.slice(1, value.length);
            start.toUpperCase() + end;
            resultArray.push(start.toUpperCase() + end);
        }
        return resultArray.join(' '); 
    }
}

const myString = new CustomString();

console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));