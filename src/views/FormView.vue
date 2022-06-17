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
        <Field name="username" type="username" rules="required|min-length:3" />
        <ErrorMessage name="username" />
      </div>

      <div class="form-group">
        <label for="password">password:</label>
        <Field name="password" type="password" rules="required" />
        <ErrorMessage name="password" />
      </div>

      <div class="form-group">
        <button>Sign up</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
      alert("Everything is Valid");
    },
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
