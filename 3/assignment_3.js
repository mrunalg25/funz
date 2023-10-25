function reverseString() {
    let final = "";
    let str = document.getElementById("reverse").value;
    for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
    }
    document.getElementById("display").innerHTML = final;
}
function replaceS() {
    let str = document.getElementById("str").value;
    let char1 = document.getElementById("char1").value;
    let char2 = document.getElementById("char2").value;
    let new_final = str.replace(char1, char2);
    document.getElementById("display1").innerHTML = new_final;
    }
function palindromeS() {
    let final = "";
    let check_pal = "";
    let str = document.getElementById("palindrome").value;
    for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
    }
    if (str == final) {
    check_pal = "string is palindrome";
    }
    else {
    check_pal = "string is not palindrome";}
    document.getElementById("display2").innerHTML = check_pal;
    }
    // function rep() {
    //     var str = 'Hello World';
    //     str = setCharAt(str,4,'a');
    //     alert(str);
    // }
    
    function setCharAt(str,index,chr) {
        if(index > str.length-1) {window.alert('Index Out Of Bound'); return false;}
        console.log(str.substring(index+1));
        index++;
        return str.substring(0,index-1) + chr + str.substring(index,str.length);
    }
    function replaceSI() {
        let str = document.getElementById("str1").value;
        let index = document.getElementById("char3").value;
        let val = document.getElementById("char4").value;
        let new_final = setCharAt(str,index,val);
        if(new_final!=false){
        console.log(str,str.substring(index),new_final,index,val,new_final[index]);
        document.getElementById("display3").innerHTML = new_final;}
        }