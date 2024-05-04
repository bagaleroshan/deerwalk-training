//function level scope=>var
//block is related to function
//a variable will known within its functional block only
 
function sum(){
    console.log(a)//undefined
    //
    //
    //
    var a=15
    //
    //
    //
    console.log(a)//15
}
//function-level-scope=accessible zone
//there is no TDZ concept in var all are accessible  zone

//console.log(a)