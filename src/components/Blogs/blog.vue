<template>
  <div class="blog mr-3">
    <div class="blog-col">
      <div
        class="blog-img-box"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div :class="overL">
        <div class="content text-right px-10">
          <h1>
            الدليل التربوي و الصحي الكامل و المهم لطلبة الثانوية العامة 2020
          </h1>
          <p>2020 / 10 / يونيو</p>
        </div>
      </div>
      <div class="over-layer-main"></div>
      <div class="flex mt-6">
        <div class="blog-subject">
          <h2>وزارة التربية و التعليم</h2>
          <div class="flex justify-between mt-5">
            <div class="flex">
              <img
                class="mr-3"
                src="@/assets/images/left-arrow (2).png"
                alt=""
              />
              <p class="more-info">اقرأ المزيد</p>
            </div>
            <p class="mr-4">نصائح عامة</p>
          </div>
        </div>
        <img src="http://127.0.0.1:8000/images/Group666.png" alt="Img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "overL"],
};
</script>
<style>
.blog-col {
  position: relative;
}
.blog-img-box {
  height: 240px;
}
.over-layer,
.over-layer2,
.over-layer3,
.over-layer4 {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 240px;
  width: 100%;
  transition: 1s ease all;
  opacity: 0.7;
  color: #fff;
  z-index: 10;
}

.over-layer:hover {
  background: rgb(112, 112, 112);
  background: linear-gradient(
    173deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(112, 112, 112, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  opacity: 0.7;
  transition: 0.5s all;
}
.over-layer2:hover {
  background: rgb(135, 128, 94);
  background: linear-gradient(
    180deg,
    rgba(135, 128, 94, 1) 0%,
    rgba(112, 112, 112, 1) 0%,
    rgba(255, 209, 1, 1) 100%
  );
  opacity: 0.7;
  transition: 1s all;
}
.over-layer3:hover {
  background: rgb(112, 112, 112);
  background: linear-gradient(
    180deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(112, 112, 112, 1) 0%,
    rgba(77, 150, 246, 1) 100%
  );
  opacity: 0.7;
  transition: 1s all;
}
.over-layer4:hover {
  background: rgb(112, 112, 112);
  background: linear-gradient(
    180deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(112, 112, 112, 1) 0%,
    rgba(0, 170, 28, 1) 100%
  );
  opacity: 0.7;
  transition: 1s all;
}
.over-layer-main {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 240px;
  width: 100%;
  opacity: 0.3;
  color: #fff;
  background-color: #1a1a1a;
}
.content-layer {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 240px;
  width: 100%;
}
.content {
  font-weight: 700;
  color: #fff;
  margin-top: 150px;
}
.blog-subject h2 {
  font-weight: 700;
  text-align: right;
  margin-right: 10px;
}
.blog-subject {
  width: 83%;
}
.more-info {
  color: #fb503d;
}
</style>
