import { apiRoutes } from "@/routes/api.routes";
import { AuthRoute } from "@/types/api/apiRoutes";
import { buildRoute } from "@/utils/routeBuilder";

const loginUer=(route:AuthRoute)=>{
    console.log(route)
}



loginUer(buildRoute(apiRoutes.auth.login))