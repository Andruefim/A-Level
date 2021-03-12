function padStart(str,targetLength,filler) {
    targetLength = targetLength>>0; 
    filler = String(filler || ' ');
    if (str.length > targetLength) {
        return String(str);
    }
    else {
        targetLength = targetLength-str.length;
        if (targetLength > filler.length) {
            filler += filler.repeat(targetLength/filler.length);
        }
        return filler.slice(0,targetLength) + String(str);
    }
}

// 2

function toPrecision(number, digits) {
    let precision = number.toString();
    if (!digits){
        return number.toString();
    }
    else if(number) {
        for(let i = 0; i < precision.length; i++) {
            if (precision[i] != "0" && precision[i] != '.'){
                return precision.slice(0, i + digits);
            }
            else{
                continue;
            }
        }
    } else {
        return precision.slice(0, digits+1);
    }
}
