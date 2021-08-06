import notificacionRecaudo from "../models/notificacionRecaudo";
import apiResponses from "../models/Response";


export async function  obtenerTransaccionesService (){

  try {
    const registros = await notificacionRecaudo.findAll();

    return apiResponses._200({Registros: registros});
  } catch (error) {
    return apiResponses._400({message: "Error al consultar los registros", Error: error});
    
  }

}

