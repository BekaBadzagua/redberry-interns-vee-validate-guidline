<template>
  <div id="form">
    <h2>Vee-Validate</h2>
    <Form @submit="onSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <Field name="email" type="email" rules="required|email" />
        <ErrorMessage name="email" />
      </div>

      <div class="form-group">
        <label for="username">username:</label>
        <Field name="username" type="text" rules="required|min:3" />
        <ErrorMessage name="username" />
      </div>

      <div class="form-group">
        <label for="password">password:</label>
        <Field name="password" type="password" rules="required|min:4" />
        <ErrorMessage name="password" />
      </div>

      <div class="form-group">
        <button>Sign up</button>
      </div>
      <div>
        <button @click="setLocale('en')">English</button>
        <button @click="setLocale('ka')">ქართული</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { setLocale } from "@vee-validate/i18n";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      alert("Everything is Valid");
    },
    setLocale,
    // // Code above is same as this, but shorter
    // setLocale(locale) { // our method to use when we click the buttons
    //   setLocale(locale); // from "@vee-validate/i18n";
    // },
  },
};
</script>

<style scoped>
h2 {
  max-width: 300px;
  text-align: center;
  margin-bottom: 50px;
}
span {
  color: red;
}
.form-group {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 30px;
}
</style>
