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
function descuento(total, tieneDescuento) {
    const descuento = 0.85;

    if (tieneDescuento == true) {
        total *= descuento;
        alert(`Se ha aplicado un descuento del 15% a tu cuenta. Precio final: ${total.toFixed(2)}`);
    } else {
        alert(`No tienes descuento, tu total es ${total.toFixed(2)}`);
    }
}