import store from "@/store";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import axios from "axios";

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule {
  isLoading = false;
  users = {};

  @Action
  async fetchUser() {
    try {
      this.SET_LOADING(true);
      const res = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
        timeout: 4000, // 4 seconds timeout
      });

      this.SET_USERS(res.data);
    } catch (error) {
      console.info(error);
    } finally {
      this.SET_LOADING(false);
    }
  }

  @Mutation
  SET_LOADING(bool: boolean) {
    this.isLoading = bool;
  }

  @Mutation
  SET_USERS(data: any[]) {
    this.users = data;
  }
}

export const UserModule = getModule(User);
