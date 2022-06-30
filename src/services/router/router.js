import { createWebHistory, createRouter } from 'vue-router'
import ProductPage from 'pages/products/ProductsPage.vue'
import ContactsPage from 'pages/contacts/ContactsPage.vue'

const routes = [
  {
    path: "/products",
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: "/contacts",
    name: 'ContactsPage',
    component: ContactsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;