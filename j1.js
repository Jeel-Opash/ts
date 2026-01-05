
const a=[1,2,3,4,5];
let n=a.length;
let  b=[];
let current;
for(let i=0;i<n;i++){
    current=a[i];
    
    current.continue;
    b.push(a[i++]);
    current++;
}
console.log(b);