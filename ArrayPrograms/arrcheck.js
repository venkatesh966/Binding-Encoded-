
function array(str)
 {
    for(i=0;i<str.length-1;i++)
     {
       if(str[i]&str[i+1])
           document.write("it is an array");
       else
           document.write("not array");
     }
 }

array([12,23,32]);