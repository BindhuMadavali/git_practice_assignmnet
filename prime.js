let num = 5;
if(num===1){
    console.log("Prime")
}else{
    let flag = true
    for(i=2;i<num;i++){
        if(num%i===0){
            flag = false
            break
        }
    }
    if(flag){
        console.log("Prime")
    }else{
        console.log("not Prime")
    }
}

