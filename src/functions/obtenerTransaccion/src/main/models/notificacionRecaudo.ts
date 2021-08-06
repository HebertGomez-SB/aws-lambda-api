import { DataTypes } from "sequelize";
import db from '../db/connection';

const notificacionRecaudo = db.define('notificacion_recaudo', {
   
    canal_recaudo: {
        type: DataTypes.NUMBER
    },
    codigo_banco: {
        type: DataTypes.NUMBER
    },
    codigo_confirmacion_recaudo: {
        type: DataTypes.NUMBER
    },
    codigo_IAC: {
        type: DataTypes.NUMBER
    },
    fecha_recaudo: {
        type: DataTypes.STRING
    },
    fecha_vencimiento: {
        type: DataTypes.STRING
    },
    forma_pago: {
        type: DataTypes.NUMBER
    },
    hora_recaudo: {
        type: DataTypes.NUMBER
    },
    jornada_recaudo: {
        type: DataTypes.NUMBER
    },
    numero_cheque: {
        type: DataTypes.NUMBER
    },
    numero_convenio: {
        type: DataTypes.NUMBER
    },
    oficina_recaudo: {
        type: DataTypes.NUMBER
    },
    referencia1: {
        type: DataTypes.STRING
    },
    referencia2: {
        type: DataTypes.STRING
    },
    terminal_recaudo: {
        type: DataTypes.NUMBER
    },
    tipo_canje: {
        type: DataTypes.NUMBER
    },
    tipo_moneda: {
        type: DataTypes.STRING
    },
    valor_cheque: {
        type: DataTypes.NUMBER
    },
    valor_efectivo: {
        type: DataTypes.NUMBER
    },
    valor_factura: {
        type: DataTypes.NUMBER
    },    
    valor_total_recaudado: {
        type: DataTypes.NUMBER
    },
    
},
{
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    timestamps: false,
})

export default notificacionRecaudo;