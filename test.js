let Even = [];
function getEven() {
  for(let i=2; i<=50; i++) {
    if(i % 2 == 0) {
      Even.push(i);
    }
  }
  return Even
}
getEven();
console.log(Even);