import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },

    {
      path: "/help-center",
      name: "helpcenter",
      // route level code-splitting
      // this generates a separate chunk (HelpCenter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpCenterView.vue"),
    },

    {
      path: "/report-product",
      name: "reportproduct",
      // route level code-splitting
      // this generates a separate chunk (ReportProduct.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReportProductView.vue"),
    },

    {
      path: "/about-us",
      name: "aboutus",
      // route level code-splitting
      // this generates a separate chunk (AboutUs.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutUsView.vue"),
    },

    {
      path: "/terms",
      name: "terms",
      // route level code-splitting
      // this generates a separate chunk (Terms.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TermsView.vue"),
    },

    {
      path: "/privacy-policy",
      name: "privacypolicy",
      // route level code-splitting
      // this generates a separate chunk (PrivacyPolicy.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PrivacyPolicyView.vue"),
    },

    {
      path: "/marketplace-vendor",
      name: "marketplacevendor",
      // route level code-splitting
      // this generates a separate chunk (MarketPlace.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MarketPlaceView.vue"),
    },

    {
      path: "/create-seller-account",
      name: "createselleraccount",
      // route level code-splitting
      // this generates a separate chunk (CreateSellerAccount.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CreateSellerAccountView.vue"),
    },

    {
      path: "/business-information",
      name: "businessinformation",
      // route level code-splitting
      // this generates a separate chunk (BusinessInformation.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BusinessInformationView.vue"),
    },

    {
      path: "/bank-account",
      name: "bankaccount",
      // route level code-splitting
      // this generates a separate chunk (BankAccount.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BankAccountView.vue"),
    },

    {
      path: "/summary",
      name: "summary",
      // route level code-splitting
      // this generates a separate chunk (Summary.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SummaryView.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If the user navigated back to this route, restore the saved position
      return savedPosition;
    } else {
      // Scroll to the top of the page
      return { left: 0, top: 0 };
    }
  }
});


export default router;
