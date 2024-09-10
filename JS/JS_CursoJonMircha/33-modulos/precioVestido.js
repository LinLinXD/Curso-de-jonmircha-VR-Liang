

export const vestido = {
    precio: 10,
    descuento: 5,

    neto: function () {
        return this.precio - (this.precio * this.descuento)/100
    }
}
