import { request } from "@/utils";
import { api } from "@/constants";
function index() {
  const getLogin = async () => {
    try {
      const response = await request.post(api.auth.login, {
        username: "admin",
        password: "admin",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  getLogin();
  return <></>;
}

export default index;
