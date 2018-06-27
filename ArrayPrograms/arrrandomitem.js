
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 var temp;
function randomitem(arr)
{
   var temp,j,i=0,x,y,lim;

   lim = Math.floor(Math.random() * 100);

   for(j=0;j<lim;j++)
   {
      x = Math.floor(Math.random() * arr.length);

      y = Math.floor(Math.random() * arr.length);
      
      temp = arr[x];

      arr[x] = arr[y];

      arr[y] = temp;

   }

   k= Math.floor(Math.random() * arr.length);

   document.write(arr[k]);
}

randomitem(arr1);

