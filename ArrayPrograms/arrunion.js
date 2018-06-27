
var j=0;
var array=[], result=[];
var k=0;
 
function arr(arg1,arg2)
{
    for(i=0;i<arg1.length;i++)
    {
       array[j]=arg1[i];
       j=j+1;
    }
    for(i=0;i<arg2.length;i++)
    {
       array[j]=arg2[i];
       j=j+1;
    }
}

function distinct(arr)
{
   result.push(arr[0]);
   for(i=1;i<arr.length;i++)
   {
      while(k<i)
      {
         if(arr[i]==result[k])
             break;
         else
             k=k+1;
      }
      if(k==i)
      {
         result.push(arr[i]);
         k=0;
      }
      k=0;
    }
 }

 arr([1, 2, 3], [100, 2, 1, 10]);

 distinct(array);

 var res = result.sort(function(a, b){return a - b});

 document.write(res);


