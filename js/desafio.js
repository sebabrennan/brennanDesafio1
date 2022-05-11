let sorrentinosPrice = 400;
let fideosPrice = 300;
let panzottisPrice = 400;
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
                     1. FIDEOS (${fideosPrice}ARS)
                     2. SORRENTINOS (${sorrentinosPrice}ARS)
                     3. PANZOTIS (${panzottisPrice}ARS)
                     4. FIN`);
      
    }

    function venderProducto(opcion)
    {
       switch (opcion) 
       {
         case "1":
         {
            pedirDinero(fideosPrice)
            break;
         }
         case "2":
         {
            pedirDinero(sorrentinosPrice)
            break;
         }
         case "3":
         {
            pedirDinero(panzottisPrice)
            break;
         }
         default:
         {
            alert("opcion invalida")
            break;
         }
             
       }

    }
       
    function pedirDinero(priceProduct)
    {
            while(dineroIngresado<priceProduct)
            {
               let dinero = Number(prompt("¿Con cuanto va a pagar?"));
               
               if(dinero<priceProduct)
               {
                  alert("monto invalido")
               }
               else{
                  dineroIngresado+=dinero;
               }
            }
            
               let cambio = dineroIngresado - priceProduct;
               alert("Su cambio es: " + cambio);
               alert("Gracias");
            
         
    }
    