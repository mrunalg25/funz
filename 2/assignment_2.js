function displayMultiplicationTable() {
        const number = parseInt(document.getElementById("numberInput").value);
        if(number<=0) {
            alert('Enter positive non-zero number')
        }
        else{


        // Using for loop
        let forLoopTableHTML = "<table>";
        for (let i = 1; i <= 10; i++) {
            forLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${i}</td><td>=</td><td>${number * i}</td></tr>`;
        }
        forLoopTableHTML += "</table>";
        document.getElementById("forLoopTable").innerHTML = forLoopTableHTML;
    
        // Using while loop
        let whileLoopTableHTML = "<table>";
        let j = 1;
        while (j <= 10) {
            whileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${j}</td><td>=</td><td>${number * j}</td></tr>`;
            j++;
        }
        whileLoopTableHTML += "</table>";
        document.getElementById("whileLoopTable").innerHTML = whileLoopTableHTML;
    
        // Using do-while loop
        let doWhileLoopTableHTML = "<table>";
        let k = 1;
        do {
            doWhileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${k}</td><td>=</td><td>${number * k}</td></tr>`;
            k++;
        } while (k <= 10);
        doWhileLoopTableHTML += "</table>";
        document.getElementById("doWhileLoopTable").innerHTML = doWhileLoopTableHTML;
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function tables() {
//     let num = parseInt(document.getElementById("num").value);
//     let sentence = "";
//     // -- using for loop
//             for (let i = 1; i <= 10; i++) {
//             let final = num * (i);
//             sentence += ` \n ${num} X ${i} = ${final} <br/>`;
//             document.getElementById("display").innerHTML = sentence
//     }
//    }
// // function addNumbers() {
// //     var number;
// //     var result = "";
// //     var j=1;
// //     number = Number(document.getElementById("number").value);

// //     for(var i = 1; i<= 10; i++){
// //       result = result + "<p>"+number + "*" + i + "=" + number * i+"</p>";
// //     }

// //     document.getElementById("resultf").innerHTML = result;


// //     while(i<= 10){
// //         result = result + "<p>"+number + "*" + i + "=" + number * i+"</p>";
// //         i++;
// //       }

// //       document.getElementById("result").innerHTML = resultw;


// //       do{
// //         result = result + "<p>"+number + "*" + j + "=" + number * j+"</p>";
// //         j++;
// //       }while(j<= 10);

// //       document.getElementById("resultd").innerHTML = result;


// //     }





