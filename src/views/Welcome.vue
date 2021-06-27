<template>
  <div class="Welcome">
    <Header></Header>
    <courses></courses>
    <blogs></blogs>
    <Teachers></Teachers>
    <Testimonials></Testimonials>
    <register-now></register-now>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Layout/header";
import Courses from "@/components/Courses/courses";
import Blogs from "@/components/Blogs/blogs";
import Teachers from "@/components/Teachers/Teachers";
import Testimonials from "@/components/Testimonials/Testimonials";
import RegisterNow from "@/components/Register-Now/register-now";
import Footer from "@/components/Layout/Footer/footer";
export default {
  components: {
    Footer,
    RegisterNow,
    Testimonials,
    Teachers,
    Blogs,
    Courses,
    Header,
  },
  props: {},
};
</script>
