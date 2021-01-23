function sum(input){
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {   
                    if(isNaN(input[i])){
                        continue;  
                    }             
                   
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(sum([60,20,10]));
   
   console.log(sum([1,2,3]));