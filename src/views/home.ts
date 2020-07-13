import { UserModule } from "@/store/user";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Home",
  components: {},
})
export default class Home extends Vue {
  isOpen = false;
  user: any = {
    name: "",
  };

  get users() {
    return UserModule.users;
  }

  get isLoading() {
    return UserModule.isLoading;
  }

  get keyword() {
    return "";
  }

  mounted() {
    this.setInitData();
  }

  async setInitData() {
    UserModule.fetchUser();
  }

  userSelected(user: any) {
    this.isOpen = true;
    this.user = user;
  }
  close() {
    this.isOpen = false;
  }
}
