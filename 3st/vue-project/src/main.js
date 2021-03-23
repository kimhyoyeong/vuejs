import Vue from 'vue';
import router from './router'//router import

const app = new Vue({
	data: {
		currentRoute: window.location.pathname,//�ּҰ��� �ѱ�
	},
	computed:{
		ViewComponent(){
			return router[this.currentRoute]//����� Ű���� �����Ǵ� ������Ʈ ����
		}
	},
	render(h){return h(this.ViewComponent)}
}).$mount('#app')

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});

/*
 import App from './App.vue'
 
 Vue.config.productionTip = false
 
 new Vue({
 render: h => h(App),
 }).$mount('#app')
 */
