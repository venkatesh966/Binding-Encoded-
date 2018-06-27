var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
 
 function sorting(arr)
 {
    var array=arr.sort(function(a, b){return a - b});
    document.write(array);
 }
 
 sorting(arr1);