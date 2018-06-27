//Finding distinct elements in an array//

//declarations

 var arr1 = [ 3, 3, 4, 6, 5, -4,7,8,9,3, 2,44,4,4,4, 1 ]
 var result=[];//final values
 var j=0;
 
 
 //function defination
 
 function distinct(arr)
 {
	result.push(arr[0]);
	for(i=1;i<arr.length;i++)
	{
		while(j<i)
		{
			if(arr[i]==result[j])
				break;
			else
				j=j+1;
		}
        if(j==i)
        {
           result.push(arr[i]);
           j=0;
        }
           j=0;
    }
 }
 
 //function calling
 
       distinct(arr1);
 
 //printing the result
 
       document.write(result);