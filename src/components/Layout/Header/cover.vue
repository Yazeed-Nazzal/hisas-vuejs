<template>
  <div>
    <div class="container mx-auto">
      <div class="cover grid grid-cols-2 rounded-lg">
        <div>
          <img src="@/assets/images/cover.png" alt="" />
        </div>
        <div class="cover-content text-right pr-10 pt-10">
          <div>
            <h1>تعلم في كل مكان وزمان</h1>
            <h2>المدرسة الإلكترونية الواعدة في الأردن</h2>
          </div>
          <div class="cover-form flex justify-end mt-10">
            <button class="btn search-btn mr-5">بحث</button>
            <div class="input-group w-4/6">
              <input
                class="
                  text-right
                  flex-initial
                  shadow
                  appearance-none
                  border
                  w-full
                  py-2
                  px-3
                  rounded-xl
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="text"
                placeholder="ما المادة التي تريد البحث عنها"
                required
              />
            </div>
          </div>
          <div class="cover-item grid grid-cols-4">
            <div class="flex justify-end flex-wrap text-center">
              <img
                style="width: 51%"
                src="@/assets/images/item1.png"
                alt="item1"
              />
              <p class="w-2/4">المدونة</p>
            </div>
            <div class="flex justify-end flex-wrap text-center">
              <img
                style="width: 51%"
                src="@/assets/images/item2.png"
                alt="item2"
              />
              <p class="w-2/4">بنك الأسئلة</p>
            </div>
            <div class="flex justify-end flex-wrap text-center">
              <img
                style="width: 51%"
                src="@/assets/images/item3.png"
                alt="item3"
              />
              <p class="w-2/4">المكتبة</p>
            </div>
            <div class="flex justify-end flex-wrap text-center">
              <img
                style="width: 51%"
                src="@/assets/images/item4.png"
                alt="item4"
              />
              <p class="w-2/4">الدورات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
};
</script>
<style>
.cover {
  height: 760px;
  width: 100%;
  background-color: #f3fbff;
}
.cover-content {
  padding-top: 100px;
  color: #1f1f1f;
}
.cover-content h1 {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
}
.cover-content h2 {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
}
.search-btn {
  background-color: #fff8d8;
  padding: 8px 30px;
  border-radius: 10px;
  color: #ffd200;
}
.search-btn:hover {
  background-color: #ffd101;
  color: #fff;
}
.cover-item {
  margin-top: 100px;
}
.cover-item p {
  margin-top: 10px;
}
.cover-item img {
  height: 100px;
}
</style>
