export default class Reseña {
    constructor(idReseña, idCliente, idObra, calificacion, comentario, imagenObra) {
        this.idReseña = idReseña;
        this.idCliente = idCliente;
        this.idObra = idObra;
        this.calificacion = calificacion;
        this.comentario = comentario;
        this.imagenObra = imagenObra;
    }
}