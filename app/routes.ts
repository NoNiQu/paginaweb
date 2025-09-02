import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  //cofradía
  route("/historia", "routes/historia.tsx"),
  route("/estatutos", "routes/estatutos.tsx"),
  route("/cultos", "routes/cultos.tsx"),
  route("/sedecanonica", "routes/sedecanonica.tsx"),
  route("/juntadirectiva", "routes/juntadirectiva.tsx"),
  //titular
  route("/virgendelaesperanza", "routes/virgendelaesperanza.tsx"),
  //noticias
  route("/noticias", "routes/noticias.tsx"),
  //secretaría
  route("/haztehermano", "routes/haztehermano.tsx"),
  route("/actualizardatos", "routes/actualizardatos.tsx"),
  route("/serportador", "routes/serportador.tsx"),
  route("/contacto", "routes/contacto.tsx"),
  route("/donativo", "routes/donativo.tsx"), 
  //footer
  route("/avisolegal", "routes/avisolegal.tsx"),
  route("/politicaprivacidad", "routes/politicaprivacidad.tsx"),
  route("/politicacookies", "routes/politicacookies.tsx"),
] satisfies RouteConfig;
