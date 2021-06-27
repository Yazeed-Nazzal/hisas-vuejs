<template>
  <div class="blogs container mx-auto">
    <div class="all-courses flex items-center">
      <div class="all-courses-icon flex justify-center items-center">
        <img
          width="30"
          style="height: 40px"
          src="@/assets/images/Group 1334.png"
          alt="all"
        />
      </div>
      <p class="ml-4">تصفح جميع المدونات</p>
    </div>

    <div class="courses grid grid-cols-2 lg:grid-cols-4 mt-5">
      <blog
        image="http://127.0.0.1:8000/images/Rectangle.png"
        over-l="over-layer"
        >test</blog
      >
      <blog
        image="http://127.0.0.1:8000/images/Rectangle2.png"
        over-l="over-layer2"
      ></blog>
      <blog
        image="http://127.0.0.1:8000/images/Rectangle3.png"
        over-l="over-layer3"
      ></blog>
      <blog
        image="http://127.0.0.1:8000/images/Rectangle4.png"
        over-l="over-layer4"
      ></blog>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blogs/blog";
export default {
  components: { Blog },
};
</script>
<style>
.blogs {
  margin-top: 100px;
}
</style>
