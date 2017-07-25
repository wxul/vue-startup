import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        testdata:'this is test'
    },
    getters: {
        testdata: state => {
            return state.testdata;
        }
    },
    mutations: {
        changeText(state, payload) {
            state.testdata = payload;
        }
    },
    actions: {
        changeText(d, payload) {
            d.commit('changeText', payload);
        }
    }
});