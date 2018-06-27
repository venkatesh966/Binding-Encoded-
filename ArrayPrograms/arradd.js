var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr2 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var temp;

function addarr(arr1,arr2)
 {
   for(i=0;i<arr1.length;i++)
    {
      arr1[i]=arr1[i]+arr2[i];
    }
    document.write(arr1);
 }
 addarr(arr1,arr2);