<template>
  <div>
    <nav-bar></nav-bar>
    <cover></cover>
  </div>
</template>

<script>
import NavBar from "@/components/Layout/Header/nav-bar";
import Cover from "@/components/Layout/Header/cover";
export default {
  components: { Cover, NavBar },
  props: {},
};
</script>
