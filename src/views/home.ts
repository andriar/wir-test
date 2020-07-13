import { UserModule } from "@/store/user";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Home",
  components: {},
})
export default class Home extends Vue {
  isOpen = false;
  keyword = "";
  user: any = {
    name: "",
  };

  get users() {
    return UserModule.users;
  }

  get isLoading() {
    return UserModule.isLoading;
  }

  mounted() {
    this.setInitData();
    // this.finduser();
  }

  async setInitData() {
    UserModule.fetchUser();
  }

  finduser() {
    UserModule.findUser(this.keyword);
  }

  userSelected(user: any) {
    this.isOpen = true;
    this.user = user;
  }

  close() {
    this.isOpen = false;
  }
}
