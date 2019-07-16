drawTriangle(3);
function drawTriangle(size) {
    
    var lS = "/";
    var rS = "\\";
    var i = 0;
    
    while (i < size) {
        in2 = "";
        
        for (j = 0; j < size - i; j++) {
            in2 += " ";
        }
        
        for (j = 0; j < i + 1; j++) {
            if (j === 0) {
                s = ""
            } else s += "  ";
        }
        
        if (i === size - 1) {
            console.log(in2 + lS + s.replace(/ /g, "_") + rS);
        } else console.log(in2 + lS + s + rS);
        i++;
    }
}
function drawReverseTriangle(size) {
    var lS = "/";
    var rS = "\\";
    var i = 0;
    while (i < size) {
        in2 = "";
        s = "";
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                s = "";
            } else s += " ";
        }
        for (let j = 0; j < size - i; j++) {
            if (j === 0) {
                in2 += "";
            } else in2 += "  ";
        }
        console.log(" " + s + rS + in2 + lS);
        i++;
    }
}
drawRomb(2)

function drawRomb(size) {
    
    var lS = "/";
    var rS= "\\";
    var i = 0;
    
    while (i < size) {
        in2 = "";
        
        for (j = 0; j < size - i; j++) {
            in2 += " ";
        }
        
        for (j = 0; j < i + 1; j++) {
            
            if (j === 0) {
                s = ""
            } else s += "  ";
        }
        
        if (i === size - 1) {
            console.log(in2 + lS + s + rS)
            drawReverseTriangle(size);
        } else console.log(in2 + lS + s + rS);
        i++;
    }
}

console.log(multiply(6, 9));

function multiply(a, b) {
    let c = a;
    
    if (a === 0 || b === 0) {
        return 0;
    }
    
    if (b > 0) {
        for (let i = 1; i < b; i++) {
            a = c + a;
        }
        return a;
    
    } else {
        b = Math.abs(b);
        for (let i = 1; i < b; i++) {
            a = c + a;
        }
        return -a;
    }
}