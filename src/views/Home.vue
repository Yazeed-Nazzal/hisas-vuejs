<template>
  <div class="home">
    <h1 class="text-blue-300 font-bold">Welcome {{ user.name }}</h1>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Home",
  data() {
    return {
      user: {},
    };
  },

  mounted() {
    if (!this.$store.getters.getToken) {
      router.push("/Login");
    } else {
      this.user = this.$store.getters.getUser;
    }
  },
};
</script>
