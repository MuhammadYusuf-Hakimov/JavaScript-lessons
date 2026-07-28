let str = "Men Oxfordda IT o'qiyman!";
let cloneStr = ""
function reverseStr(str){
for(let i = str.length-1; i>=0; i--){
    cloneStr+=str[i]
} 
console.log(cloneStr);
}
 reverseStr(str)