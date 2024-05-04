let fun1=()=>{
    let name ="roshan"
    let fun2=()=>{
        console.log(name)
    }
return fun2
}

let _fun1=fun1()//fun2()
_fun1()
//when a function is return
//function is not only one who get return
//function lexical scope also gets return