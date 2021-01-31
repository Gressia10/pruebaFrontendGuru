const apiHost = process.env.API_HOST;
const apiEndpoint = process.env.API_ENDPOINT;
const api_key = process.env.API_KEY;

console.debug("apiHost:", apiHost);
console.debug("apiEndpoint", apiEndpoint);

// Para que la variable de entorno aparezca en el process.env
// Se debe agregar en el webpack.config.js en el plugin de Environment
export const config = {
  // Se utilizan getters para poder mockear los valores de la configuracion
  // usando la utilidad de jest.fn
  get apiHost() {
    return apiHost;
  },
  get api_key(){
    return api_key;
  },
  get baseRoute() {
    return `${apiHost}/${apiEndpoint}`;
  },
};
