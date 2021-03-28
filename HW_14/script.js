// 1
var orig = '    foo   ';
function trim(string){
    for (let i=0; i < string.length; i++){
        if ( i == true ){
            return string[i];
        } else {
            continue;
        }
    }
}
console.log(orig.trim());

// 2 

function parseint(str, radix){
    str = str>>0;
    if (radix == undefined || radix == 0){
        if (str.includes(x) == true || str.includes(X) == true){
            return +(str).toString(16);
        } else {
            return +(str).toString(10);
        }
    } else {
        return +(str).toString(radix); 
    }
}
console.log(parseint('10.5', 10));

// 3

function toLowerCase(str){
    var uni = "";
    for (var i=0; i < str.length; i++){
        if( str[i].charCodeAt() > 97 || str[i] < 97){
            uni += String.fromCharCode(str[i].charCodeAt());
        } else {
            uni += String.fromCharCode(str[i].charCodeAt() + 32);
        }
    } 
    return uni;
}

console.log(toLowerCase('HeLLo WoRlD'));

// 4
const employeeArr = [{
    id: 0,
    name: 'Valeriy',
    surname: 'Zhmishenko',
    salary: 1000, 
    workExperience: 10, 
    isPrivileges: true, 
    gender: 'male',
}];

function Employee(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary; 
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
    this.getFullName = function(){
        return this.name + ' ' + this.surname;
    };
    this.getSalaryRate = function(){
        if(this.workExperience < 3 && this.salary <= 200){
            return 'low';
        } else if (this.workExperience >= 3 && this.workExperience <= 7, this.salary > 4000){
            return 'moderate';
        } else if (this.isPrivileges == true, this.workExperience >= 7, this.salary > 7000){
            return 'high';
        }
    };
}

const employeeObj = new Employee(employee);

console.log(employeeObj);
