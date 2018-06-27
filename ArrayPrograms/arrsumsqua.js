var sum = 0,

function sq(array)
 {
  
  i = array.length;
      while (i--) 
      sum += Math.pow(array[i], 2);
      return sum;
 }
 
document.write(sq([0,1,2,3,4])); 
