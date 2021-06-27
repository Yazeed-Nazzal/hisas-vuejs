<template>
  <div class="courses container mx-auto mt-12">
    <div class="all-courses flex items-center">
      <div class="all-courses-icon flex justify-center items-center">
        <img
          width="30"
          style="height: 40px"
          src="@/assets/images/Group 1334.png"
          alt="all"
        />
      </div>
      <p class="ml-4">تصفح جميع الدورات</p>
    </div>
    <div class="courses grid grid-cols-2 lg:grid-cols-6 mt-5">
      <course
        image="http://127.0.0.1:8000/images/Mask.png"
        specification="علمي"
        subject="كيمياء"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. محمد الشطناوي"
      ></course>
      <course
        image="http://127.0.0.1:8000/images/Mask2.png"
        specification="علمي"
        subject="علوم الأرض"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. ماهر سعيفان"
      ></course>
      <course
        image="http://127.0.0.1:8000/images/Mask3.png"
        specification="صناعي"
        subject="الفيزياء"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. سعيد خضر"
      ></course>
      <course
        image="http://127.0.0.1:8000/images/Mask4.png"
        specification="مشترك"
        subject="اللغة العربية"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. يوسف الكيلاني"
      ></course>
      <course
        image="http://127.0.0.1:8000/images/Mask5.png"
        specification="صناعي"
        subject="الفيزياء"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. معن حماد"
      ></course>
      <course
        image="http://127.0.0.1:8000/images/Mask6.png"
        specification="اللغة العربية"
        subject="الفيزياء"
        teacher-img="http://127.0.0.1:8000/images/Group334.png"
        teacher="أ. محمد الشطناوي"
      ></course>
    </div>
  </div>
</template>

<script>
import Course from "@/components/Courses/course";
export default {
  components: { Course },
  props: {},
};
</script>
<style>
.all-courses-icon {
  background-color: #fff9dd;
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
</style>
