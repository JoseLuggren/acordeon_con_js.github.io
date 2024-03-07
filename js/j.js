function cambio(id)
{



    let botones= document.getElementsByTagName('button');
    let parrafos= document.getElementsByClassName('oculto');
    let imagenes= document.getElementsByClassName('simbolo');
    
    

    for(let i=0 ; i<botones.length; i++)
    {

        
        if (botones[i] == id)
        {
 
            


           

            if  ( botones[i].value == 0)   
            {    
               parrafos[i].style.display = "block";   
               imagenes[i].src="imagenes/m1.png";
               botones[i].style.backgroundColor= "rgb(168, 195, 120)";
            }

            if  ( botones[i].value == -1 )   
            {    
               parrafos[i].style.display = "none";
               imagenes[i].src="imagenes/s1.png";
               botones[i].style.backgroundColor= "rgb(200, 200, 200)";
  
            }

            botones[i].value = ~ botones[i].value ;
                        
            
            
         
       
           
        } 

        if (botones[i] != id)
        {
            botones[i].value ='0';
            console.log(botones[i].value);
            parrafos[i].style.display = "none"
            imagenes[i].src="imagenes/s1.png";
            botones[i].style.backgroundColor= "rgb(200, 200, 200)";  
        }  
      

    }

  




};
