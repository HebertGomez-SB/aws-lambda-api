import { obtenerTransaccionesService } from "./src/main/service/obtenerTransaccionesService";

export  async function handler () {

  return obtenerTransaccionesService();

}

