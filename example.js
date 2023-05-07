//defining students details in obj
let students=[{eyeColor:"blue",age:19},{eyeColor:"green",age:20},{eyeColor:"black",age:16}]
//we sould save results in variable
//sorting array lower to higher
let result=students.sort((a,b)=>{
    if(a.age<b.age)return -1;
    if(b.age<a.age) return 1;
    else return 0;
})
console.log(result);
//for results open console page(f12) in your browser or node

    