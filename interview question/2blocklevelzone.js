//block level scope (let, const)
//block=>function ,is-else,try-catch
{
    //from line 3 t0 6 =temporal dead zone
//
//
let a=12

console.log(a)
//from line 7 to 11 =accessible zone
}

//block-level-scope=temporal dead zone(TDZ) + accessible zone(AZ)
//console.log(a)