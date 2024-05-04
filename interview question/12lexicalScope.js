let fun1=()=>{
    let a=10
    let fun2=()=>{
        let b=11
        let fun3=()=>{
            let c=12
        }
        fun3()
    }
fun2()
}
fun1()
//lexical scope =it is the  scope of parent only.(it is not the scope of grand parent)
//fun3 scope  = c
//fun3 parent scope or fun3 lexical scope b, fun3