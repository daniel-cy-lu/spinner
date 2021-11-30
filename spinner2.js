let n = 5;
let a = 0;

while (n > 0) {
  setTimeout(() => {
    process.stdout.write('\r|    ');
  }, a += 200);
  
  setTimeout(() => {
    process.stdout.write('\r/    ');
  }, a += 200);
  
  setTimeout(() => {
    process.stdout.write('\r-    ');
  }, a += 200);
  
  setTimeout(() => {
    process.stdout.write('\r\\    ');
  }, a += 200); 
  n--;
}

setTimeout(() =>{
  process.stdout.write('\n')
}, a);
