import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from './views/Todo';
import Errorpage from './views/Errorpage';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Todo
        },
        {
            path: "*",
            component: Errorpage
        }
    ]
});
