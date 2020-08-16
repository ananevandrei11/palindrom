import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "",
    isDisabledBtnSave: true,
  },
  mutations: {
    GET_INPUT_VALUE: (state, input) => {
      state.inputValue = input;

    },
    CHECK_INPUT_VALUE: (state) => {
      if (state.inputValue.length > 1) {
        let palindrom = state.inputValue.toLowerCase();
        let isBool = palindrom === palindrom.split("").reverse().join("");
        state.isDisabledBtnSave = !isBool;
      }
    },
    SET_PALINDROM: (state) => {
      return axios({
        method: "post",
        url: "http://localhost:3000/data",
        data: JSON.stringify({name: state.inputValue, id: i++ }),
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
});
