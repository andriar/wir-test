import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export interface AppState {
  loadingProcess: boolean;
}

export interface RootState {
  app: AppState;
}

export default new Vuex.Store<RootState>({});
