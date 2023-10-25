function set_string()
    {
		var string1  = document.getElementById("st1").value;
    var string2  = document.getElementById("st2").value;
    document.getElementById("casing").innerHTML="";
    document.getElementById("regex").innerHTML="";
    document.getElementById("locom").innerHTML="";
    document.getElementById("equality").innerHTML="";
    document.getElementById("userdef").innerHTML="";
    com1(string1,string2);
    com2(string1,string2);
    com3(string1,string2);
    com4(string1,string2);
    com5(string1,string2);


	}
        
        function com1(string1,string2)
        {
           
           var ot;
        const result1 = string1.toUpperCase() === string2.toUpperCase();
        
        if(result1) {
               ot="The strings are similar ";
               

          } else {
                ot="The strings are not similar ";
           
            
        }
              
        document.getElementById("casing").innerHTML=ot;

         }
  
      

      function com2(string1,string2)
        {
        
        const pattern = new RegExp(string1, "gi");
          var ot;
         // compare the stings
         const result2 = pattern.test(string2)
         
        if(result2) {
             ot="The strings are similar <br><br>";
            
            
         } else {
             ot="The strings are not similar <br><br>";
            
            
        }
        document.getElementById("regex").innerHTML=ot;

      }

   function com3(string1,string2)
        {

        // program to perform case insensitive string comparison
          var ot;
         const result3 = string1.localeCompare(string2, undefined, { sensitivity: 'base' });
         
        if(result3 == 0) {
            ot="The strings are similar <br><br>";
         
        } else {
          ot="The strings are not similar <br><br>";
         
       
        }

       document.getElementById("locom").innerHTML=ot;
}


function com4(string1,string2)
        {
        

     var ot;
      
        if( string1 === string2)
        {
         ot="The strings are similar <br><br>";
           
        }
        else
        {
         ot="The strings are not similar";
         
        }

     document.getElementById("equality").innerHTML=ot;
    }

    function com5(string1, string2){
      var op;
      if(string1.length!=string2.length) {op="String 1 size is not the same as String 2 size";}
      else{
      let i=0;
      for(;i<string1.length;i++){
        if(string1.charCodeAt(i)!=string2.charCodeAt(i)) {op=`String 1 and String 2 are not equal as ASCII value of charachters at index ${i} are not equal.`; break;}
      }

      if(i==string1.length) op="String 1 and String 2 are equal";}
      
      document.getElementById("userdef").innerHTML=op;
    }