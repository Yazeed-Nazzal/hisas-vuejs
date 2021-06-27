<template>
  <nav
    class="flex items-center container mx-auto justify-between flex-wrap p-6"
  >
    <div>
      <button class="btn mr-6">
        <router-link to="Register">أنشاء حساب جديد</router-link>
      </button>
      <button class="btn login-btn">
        <router-link to="Login">تسجيل الدخول</router-link>
      </button>
    </div>
    <div class="block lg:hidden" @click="NavToggle">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-200
          border-teal-400
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      v-if="Navtoggle"
    >
      <div class="lg:flex-grow">
        <a class="block mt-4 lg:inline-block lg:mt-0 mr-10"> الدعم الفني </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 mr-10"> نقاط البيع </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 mr-10"> المجتمع </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 mr-10 active"> الرئيسية</a>
      </div>
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="@/assets/images/logo1X.png" alt="logo" />
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Navtoggle: true,
    };
  },
  methods: {
    NavToggle() {
      this.Navtoggle = !this.Navtoggle;
    },
  },
};
</script>
<style>
.login-btn {
  background-color: #fef2e5;
  padding: 8px 30px;
  border-radius: 10px;
  color: #f57c00;
}
.login-btn:hover {
  background-color: #f57c00;
  color: #fff;
}
.active {
  color: #f57c00;
}
</style>
