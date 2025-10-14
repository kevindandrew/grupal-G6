/* ---------------RESTAURANTE----------------- 
MOSTRAR UN MENU DE OPCIONES DE LOS PLATOS Q TENEMOS DISPONIBLES 
LA PERSONA PUEDE ELEGIR MAS DE UN PLATO DEPUES DE ELEGIR LOS PLATOS
MOSTRAR UN LISTADO DE TODOS LOS PLATOS Q PIDIO JUNTO CON EL TOTAL A PAGAR 
Y SI EL SALDO ES DE MAS DE 100$ REALIZAR UN DESCUENTO DEL 15%
*/
/* 
    EDMUND
    JAIME           MENU DE OPCIONES Y GUARDAR LAS OPCIONES EN UN ARRAY
    MOISES

    EMANUEL
    BELEN           FUNCION Q RECIBA UN ARRAY DE PLATOS Q TENDRAN NOMBRE Y EL PRECIO 
    JORGE               Y DEBERA RETORNAR EL TOTAL

    ALFREDO
    GERARDO         FUNCION Q RECIBA UN TOTAL Y RETORNE UN TRUE O FALSE 
    BOREN   


    DAVID
    IBRAIM             VAN A DARLE EL DESCUENTO SI LA PERSONA LO AMERITA   
    IGNACIO            Y EN UN ALERT MOSTRAR CUANTO DEBE PAGAR YA SEA Q TENGA O NO DESCUENTO
*/


let menu = [
    { orden: 1, guisado: "pollo en salsa roja", sopa: "arroz rojo", precio: 12, },
    { orden: 2, guisado: "pollo en salsa verde", sopa: "sopa de pasta", precio: 13, },
    { orden: 3, guisado: "pollo en mole negro", sopa: "arroz blanco", precio: 15, },
    { orden: 4, guisado: "albóndigas en salsa morita", sopa: "pueré de papa", precio: 14, },
    { orden: 5, guisado: "tacos dorados de pollo", sopa: "ensalada", precio: 11, },        
]

let opcionSeleccionada = 0 , ordenesSeleccionadas = [] ;


do {
    opcionSeleccionada = parseInt(prompt(`
        Bienvenido al restaurant

        A continuación seleccione la orden(es) que desee:

        1. Pollo en salsa roja con arroz rojo.
        2. Pollo en salsa verde con sopa de pasta.
        3. Pollo en mole negro con arroz blanco.
        4. Albóndigas en salsa morita con puré de papa.
        5. Tacos dorados de pollo con ensalada.
        6. Terminar y ordenar.

        ¿ Qué opción desea ?
        `));
         

    if ( opcionSeleccionada != 6 ) { ordenesSeleccionadas.push(opcionSeleccionada); }


} while( opcionSeleccionada != 6 );

console.log(`Usted ha solicitado las siguientes órdenes: 
    `);
console.log("Órdenes seleccionas por el cliente: " , ordenesSeleccionadas);