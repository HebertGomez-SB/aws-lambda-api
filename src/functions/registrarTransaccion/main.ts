import { registrarTransaccionesService } from "./src/main/service/registrarTransaccionesService";

export  async function handler (event: { body: any; }) {

  const body = JSON.parse(event.body || ""); 


  return registrarTransaccionesService(body);

}
