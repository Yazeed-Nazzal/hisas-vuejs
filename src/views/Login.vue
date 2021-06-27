<template>
  <div class="Login my-10">
    <div class="container mx-auto">
      <div class="Register-Box w-3/6 mx-auto px-4">
        <!--        Box-Header-->
        <div class="grid grid-rows-2 w-full">
          <div class="flex justify-center">
            <img src="@/assets/images/logo1X.png" alt="logo" />
          </div>
          <div class="flex justify-center">
            <p class="font-semibold mt-3">تسجيل الدخول</p>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="social-btn rounded-lg mr-5">
            <img
              class="mr-3"
              src="@/assets/images/google.png"
              style="display: inline-block"
              alt="Google"
            />
            <span>جوجل</span>
          </button>
          <button class="social-btn rounded-lg mr-5">
            <img
              class="mr-3"
              src="@/assets/images/facebook2.png"
              style="display: inline-block"
              alt="Google"
            />
            <span>فيسبوك</span>
          </button>
        </div>
        <div class="flex">
          <div class="line"></div>
          <p class="line-text font-semibold px-3">أو عبر</p>
          <div class="line"></div>
        </div>
        <!--        Box-Header-->
        <!--        Box Form-->
        <form action="#" class="grid grid-rows-1 w-full">
          <div class="input-group">
            <p class="input-label">رقم الهاتف او البريد الأكتروني</p>
            <input
              v-model="form.email"
              name="email"
              class="
                shadow
                appearance-none
                border
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="email"
              type="text"
              placeholder="ادخل رقم الهاتف الفعال او البريد الألكتروني الفعال"
              required
            />
          </div>
          <div class="input-group">
            <p class="input-label">كلمة المرور</p>
            <input
              v-model="form.password"
              name="password"
              class="
                shadow
                appearance-none
                border
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              id="password"
              type="password"
              required
            />
          </div>
          <div class="input-group">
            <button
              type="submit"
              @click.prevent="SubmitLogin"
              class="submit-btn w-full mb-5"
            >
              تسجيل الدحول
            </button>
          </div>
        </form>
        <div class="text-center">
          <p>
            ليس لديك جساب ؟
            <a class="policy">
              <router-link to="/Register">انشئ حساب جديد من هنا</router-link></a
            >
          </p>
        </div>
        <!--        Box Form-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  props: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    if (this.$store.getters.getToken) {
      router.push("/Home");
    }
  },
  methods: {
    SubmitLogin() {
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      axios
        .post("http://127.0.0.1:8000/api/auth/login", data)
        .then((result) => {
          this.$store.commit("setToken", result.data.access_token);
          this.$store.commit("setUser", result.data.user);
          router.push("/Home");
        })
        .catch((error) => {
          this.error = error.response.data.error;
        });
    },
  },
};
</script>
<style scoped>
.Register-Box {
  -webkit-box-shadow: 5px 7px 18px 0px #f2f2f2;
  box-shadow: 5px 7px 18px 0px #f2f2f2;
}
.social-btn {
  border: solid 1px #707070;
  padding: 10px 50px;
}
.line {
  border-bottom: 1px solid #8d8d8d;
  width: 45%;
}
.line-text {
  position: relative;
  top: 13px;
}
.info-basic {
  border-bottom: solid 3px #f57c00;
}
.info-auth {
  border-bottom: solid 3px #f2f2f2;
}
.input-group {
  text-align: right;
  direction: rtl;
  padding: 0px 30px;
  margin-top: 20px;
}
.input-label {
  margin-bottom: 5px;
  font-weight: 500;
}
.input-group input,
.input-group select {
  background-color: #f2f2f2;
  border-radius: 15px;
}
.submit-btn {
  background-color: #d7d9ee;
  padding: 10px;
  color: #303f9f;
  transition: 500ms;
  border-radius: 15px;
}
.submit-btn:hover {
  background-color: #303f9f;
  transition: 500ms;
  color: #fff;
}
.borderOrang {
  border-bottom: solid 3px #f57c00;
}
.policy {
  color: #f57c00;
}
</style>
