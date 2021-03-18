import Vue from 'vue';
import router from './router'//router import

new Vue({
	data: {
		currentRoute: window.location.pathname,//�ּҰ��� �ѱ�
	},
	computed:{
		ViewComponent(){
			return router[this.currentRoute]//���� �ּҰ��� �ѱ� '/'
		}
	},
	render(h){return h(this.ViewComponent)}
}).$mount('#app')


/*
 import App from './App.vue'
 
 Vue.config.productionTip = false
 
 new Vue({
 render: h => h(App),
 }).$mount('#app')
 */
