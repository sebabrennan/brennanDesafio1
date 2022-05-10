let opcion = mostrarMenu();
let dineroIngresado = 0;

    if(opcion!=4)
    {
      venderProducto(opcion);
    }
    else
    {
       alert("GRACIAS");
    }
   

    function mostrarMenu()
    {
       return prompt(`Seleccione una opcion: 
                     1. FIDEOS (300 ARS)
                     2. SORRENTINOS (400 ARS)
                     3. PANZOTIS (400ARS)
                     4. FIN`);
      
    }

    function venderProducto(opcion)
    {
       switch (opcion) 
       {
         case "1":
         {
            pedirDinero(2)
            break;
         }
         case "2":
         {
            pedirDinero(3)
            break;
         }
         case "3":
         {
            pedirDinero(4)
            break;
         }
         default:
         {
            alert("opcion invalida")
            break;
         }
             
       }

    }
       
    function pedirDinero(numMin)
    {
            while(dineroIngresado<numMin)
            {
               let dinero = Number(prompt("¿Con cuanto va a pagar?"));
               
               if(dinero<200)
               {
                  alert("monto invalido")
               }
               else{
                  dineroIngresado+=dinero;
               }
            }
            
               let cambio = dineroIngresado - 300;
               alert("Su cambio es: " + cambio);
               alert("Gracias");
            
         
    }
    