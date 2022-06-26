import { createWebHistory, createRouter } from 'vue-router'
import ProductPage from 'pages/products/ProductsPage.vue'

const routes = [
  {
    path: "/products",
    name: 'ProductPage',
    component: ProductPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;