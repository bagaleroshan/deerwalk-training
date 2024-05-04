let fun1=()=>{}
let fun2=()=>{}
fun1(fun2)

let fun3=()=>{
return ()=>{

}
}

//higher order function(HOF)
//fun which takes argument as function fun1 is hoff
//fun which return another function fun3