import notificacionRecaudo from "../models/notificacionRecaudo";
import apiResponses from "../models/Response";


export async function  registrarTransaccionesService (body: any){

  try {
    const registros = notificacionRecaudo.build(body);
    await registros.save();

    return apiResponses._200({message: "Registros creados", data: registros});
    
  } catch (error) {
    return apiResponses._400({message: "Error al crear registros", Error: error});
    
  }

}

