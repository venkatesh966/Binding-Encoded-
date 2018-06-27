
var result = [];
var j=0;
function leapyear(num1,num2)
{

for(i=num1;i<=num2;i++)
{

    if (i % 400 == 0){
    result[j]=i;
    j=j+1;
        }
 
  
    if (i % 100 == 0){
    document.write("not a leap year");
        }
 
  
    if (i % 4 == 0)
        {
        result[j]=i;
        j=j+1;
        }
        
    }
    document.write(result);
    
    
   }
   
   leapyear(1000,2000)

