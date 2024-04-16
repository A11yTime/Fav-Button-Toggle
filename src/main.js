import { createApp } from 'vue'
import App from './App.vue'

import FoodItem from './components/FoodItem.vue'
import SlotsEl from'./components/SlotsEl.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('slots-el', SlotsEl)
app.mount('#app')
