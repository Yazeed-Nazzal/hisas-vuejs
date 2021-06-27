<template>
  <div class="Register my-10">
    <div class="container mx-auto">
      <div
        v-if="errors.register != ''"
        class="
          bg-red-100
          border border-red-400
          text-red-700
          px-4
          py-3
          rounded
          relative
          mb-10
        "
        role="alert"
      >
        <strong class="font-bold">خطأ في التسجيل</strong>
        <span class="block sm:inline">
          حدث خطأ خلال عملة التسجيل الرجاء اغادة المحاولة</span
        >
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
      </div>
      <div class="Register-Box w-3/6 mx-auto px-4">
        <!--        Box-Header-->
        <div class="grid grid-rows-2 w-full">
          <div class="flex justify-center">
            <img src="@/assets/images/logo1X.png" alt="logo" />
          </div>
          <div class="flex justify-center">
            <p class="font-semibold mt-3">انشاء حساب جديد</p>
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
        <div class="flex mt-6">
          <div class="w-2/4">
            <button
              class="info-auth font-semibold pb-5 w-full"
              :class="{ borderOrang: next }"
              @click="Steptoggle"
            >
              معلومات التحقق
            </button>
          </div>
          <div class="w-2/4">
            <button
              class="info-basic font-semibold pb-5 w-full"
              @click="Steptoggle"
            >
              المعلومات الاساسية
            </button>
          </div>
        </div>
        <!--        Box-Header-->
        <!--        Box Form-->
        <form action="#" class="grid grid-rows-1 w-full">
          <div class="stepOne" v-if="ShowFirstStep">
            <div class="input-group">
              <p class="input-label">الاسم كامل</p>
              <input
                v-model="form.fullName"
                name="fullName"
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
                id="username"
                type="text"
                placeholder="أدخل اسمك من اربع خانات"
                required
              />
            </div>
            <div class="input-group">
              <p class="input-label">الصف</p>
              <select
                v-model="form.grade"
                name="grade"
                class="
                  block
                  appearance-none
                  w-full
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="grade"
                required
              >
                <option selected="true">أختر الصف</option>
                <option value="first">الاول</option>
                <option value="second">الثاني</option>
              </select>
            </div>
            <div class="input-group">
              <p class="input-label">الجنس</p>
              <select
                v-model="form.gender"
                name="gender"
                class="
                  block
                  appearance-none
                  w-full
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="gender"
                required
              >
                <option selected="true">أختر الحنس</option>
                <option value="1">ذكر</option>
                <option value="0">أنثى</option>
              </select>
            </div>
            <div class="input-group">
              <p class="input-label">المدينة</p>
              <select
                v-model="form.city"
                name="city"
                class="
                  block
                  appearance-none
                  w-full
                  border border-gray-200
                  text-gray-700
                  py-3
                  px-4
                  pr-8
                  rounded
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="city"
                required
              >
                <option selected="true">أختر المدينة</option>
                <option value="amman">عمان</option>
                <option value="zarka">الزرقاء</option>
              </select>
            </div>
            <div class="input-group">
              <button
                type="submit"
                @click.prevent="Steptoggle"
                class="submit-btn w-full mb-5"
              >
                الخطوة التالية
              </button>
            </div>
          </div>
          <div class="stepTow" v-if="ShowSecondStep">
            <div class="input-group">
              <p class="input-label">البريد الألكتروني</p>
              <input
                v-model="form.email"
                name="fullName"
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
                placeholder="ادخل بريدك الاكتروني الفعال"
                required
              />
            </div>
            <div class="input-group">
              <p class="input-label">رقم الهاتف</p>
              <input
                v-model="form.phone"
                name="fullName"
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
                id="phone"
                type="text"
                placeholder="07xxxxxxxx"
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
                placeholder="كلمة المرور لا تقل عن 6 خانات"
                id="password"
                type="password"
                required
              />
              <small
                >عند الضعط على انشاء حساب جديد فأنك توافق على
                <span class="bold policy">الشروط و الاحكام </span></small
              >
            </div>
            <div class="input-group">
              <button
                type="submit"
                @click.prevent="SubmitRegister"
                class="submit-btn w-full mb-5"
              >
                انشاء حساب جديد
              </button>
            </div>
          </div>
        </form>
        <div class="text-center">
          <p>
            لديك حساب مسجل ؟
            <a class="policy"
              ><router-link to="Login">سجيل دحول</router-link></a
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
  name: "Register",
  data() {
    return {
      form: {
        fullName: "",
        password: "",
        grade: "",
        gender: "",
        city: "",
        email: "",
        phone: "",
      },
      errors: {
        password: "",
        register: "",
      },
      next: false,
      ShowFirstStep: true,
      ShowSecondStep: false,
    };
  },
  mounted() {
    if (this.$store.getters.getToken) {
      router.push("/Home");
    }
  },
  methods: {
    async SubmitRegister() {
      const data = {
        fullName: this.form.fullName,
        password: this.form.password,
        grade: this.form.grade,
        gender: this.form.gender,
        city: this.form.city,
        email: this.form.email,
        phone: this.form.phone,
      };
      console.log(data);
      axios
        .post("http://127.0.0.1:8000/api/auth/register", data)
        .then((result) => {
          if (result.data.type === "success") {
            router.push("/Login");
          } else {
            this.errors.register = true;
            window.scrollTo(0, 0);
          }
        })
        .catch((error) => {
          window.scrollTo(0, 0);
          console.loc(error);
          this.errors.register = true;
        });
    },
    Steptoggle() {
      this.next = !this.next;
      this.ShowFirstStep = !this.ShowFirstStep;
      this.ShowSecondStep = !this.ShowSecondStep;
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
