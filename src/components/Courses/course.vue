<template>
  <div class="course">
    <div class="course-img w-full text-right">
      <img :src="image" alt="" />
    </div>
    <ul class="pr-6">
      <li v-text="specification" class="text-right"></li>
    </ul>
    <h3 class="text-right mt-3 pr-1"><strong v-text="subject"></strong></h3>

    <div class="flex justify-end mt-3 items-center">
      <p v-text="teacher" class="mr-3"></p>
      <img :src="teacherImg" alt="" />
    </div>
    <div class="flex justify-end mt-3 items-center">
      <img src="@/assets/images/Group 45387.png" alt="" class="mr-2" />
      <p class="extra">تصفح الحصص المجانية</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "specification", "subject", "teacherImg", "teacher"],
};
</script>
<style>
.course ul {
  list-style: disc;
  direction: rtl;
}
.course ul li {
  color: #00c2ff;
}
.extra {
  color: #fb503d;
}
@media only screen and (max-width: 1024px) {
  .course {
    width: 65%;
    margin-bottom: 10px;
  }
}
</style>
