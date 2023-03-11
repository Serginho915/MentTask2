const padString  = (string,length,flag,direction) => {
  let quantity = length - string.length;
  let finalstring  = string;;
if(direction){
  for (let i = 0; i < quantity; i++) {
    finalstring += flag; 
  }
}
else{
  for (let i = 0; i < quantity; i++) {
    finalstring = flag + finalstring; 
  }
}
  return finalstring;
}

console.log(padString('ivan',10,'*',false))