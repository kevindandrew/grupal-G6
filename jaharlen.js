function calcularTotal(platos) {
    let total = 0;
    for (let i = 0; i < platos.length; i++) {
        total += platos[i].precio;
    }
    return total;
}
export { calcularTotal }