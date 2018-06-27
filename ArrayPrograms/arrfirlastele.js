var argg;

function array(...args)
{
   for(let arg of args)
   {
     argg=arg;
     break;
   }
   document.write(argg);
   len=argg.length;
   document.write(argg[len-1]);
}

array([7,0],34);