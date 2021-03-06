import store from "@/store";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import axios from "axios";
import { fetch } from "@/helper/api";

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule {
  isLoading = false;
  users = [];

  @Action
  async fetchUser() {
    try {
      this.SET_LOADING(true);
      const res = await fetch();

      this.SET_USERS(res.data);
    } catch (error) {
      console.info(error);
    } finally {
      this.SET_LOADING(false);
    }
  }

  @Action
  findUser(keyword: any) {
    try {
      this.SET_LOADING(true);
      const filterNames = this.users.filter(
        (el: any) => el.name.charAt(0) === keyword
      );

      this.SET_USERS(filterNames);
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
  SET_USERS(data: any) {
    this.users = data;
  }
}

export const UserModule = getModule(User);
