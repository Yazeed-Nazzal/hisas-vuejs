<template>
  <div class="Teachers">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 pt-10">
      <div class="teacher-col images-col">
        <div class="grid grid-rows-3">
          <div class="grid grid-cols-3">
            <div class="img-box">
              <img src="@/assets/images/person.png" class="ml-3" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person2.png" class="mt-12" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person3.png" class="mt-10" alt="" />
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="img-box">
              <img src="@/assets/images/person3.png" class="mt-16" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person4.png" class="ml-12" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person.png" class="mt-16" alt="" />
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="img-box">
              <img src="@/assets/images/person5.png" class="mt-20" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person2.png" alt="" />
            </div>
            <div class="img-box">
              <img src="@/assets/images/person4.png" class="mt-8" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="teacher-col content-col pr-5 text-right">
        <h1 class="bold mb-10">أفضل معلمينا</h1>
        <p>
          خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد
          مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور
          حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب
          المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي
          بحث تعداد الجنوب.
        </p>
        <p>
          قصف المسرح واستمر الإتحاد في, ذات أسيا للغزو، الخطّة و, الآخر لألمانيا
          جهة بل. في سحقت هيروشيما البريطاني يتم, غريمه باحتلال الأيديولوجية، في
          فصل, دحر وقرى لهيمنة الإيطالية ٣٠. استبدال استسلام القاذفات عل مما.
          ببعض مئات وبلجيكا، قد أما, قِبل الدنمارك حتى كل, العمليات اليابانية
          انه أن.
        </p>
        <p>
          حتى هاربر موسكو ثم, وتقهقر المنتصرة حدة عل, التي فهرست واشتدّت أن أسر.
          كانت المتاخمة التغييرات أم وفي. ان وانتهاءً باستحداث قهر. ان ضمنها
          للأراضي الأوروبية ذات.
        </p>
        <button class="btn my-account-btn">حسابي</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>
<style>
.Teachers {
  margin-top: 150px;
  background-image: url("http://127.0.0.1:8000/images/Path.png");
  background-size: cover;
  background-position: center;
}
.teacher-col {
  margin-top: 100px;
}
.content-col p {
  margin-bottom: 20px;
}
.my-account-btn {
  background-color: #ffee9f;
  color: #1f1f1f;
  padding: 10px 30px;
  border-radius: 15px;
  margin-top: 150px;
}
.img-box {
  position: relative;
  height: 200px;
}
.img-box {
  width: 120px;
}
</style>
