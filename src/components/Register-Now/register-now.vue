<template>
  <div class="register-now">
    <div class="container mx-auto mt-10">
      <h1 class="bold">سجل الأن وإبدأ التعلم</h1>
      <p>!تجربة متميزة وعلامات متميزة بإنتظارك معنا</p>
      <button class="btn account-btn">حسابي</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>
<style>
.register-now {
  background: rgb(0, 194, 255);
  background: linear-gradient(
    270deg,
    rgba(0, 194, 255, 1) 0%,
    rgba(0, 194, 255, 1) 0%,
    rgba(4, 118, 245, 1) 100%
  );
  height: 370px;
  color: #fff;
  padding-top: 100px;
}
.register-now h1 {
  font-size: 25px;
}
.account-btn {
  background-color: #ffe360;
  padding: 10px 20px;
  border-radius: 15px;
  color: #1f1f1f;
  margin-top: 50px;
}
</style>
