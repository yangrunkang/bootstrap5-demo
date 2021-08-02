const RenderHtmlApp = {
    data() {
        return {
            count: 9
        }
    }
};
Vue.createApp(RenderHtmlApp).mount('#todo-list');