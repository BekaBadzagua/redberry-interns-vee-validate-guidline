<template>
  <div id="form">
    <h2>Vee-Validate with <br />Schema & Yup</h2>
    <Form :validation-schema="schema" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="password">Email:</label>

        <Field name="email" />
        <ErrorMessage name="email" />
      </div>
      <div class="form-group">
        <label for="password">password:</label>

        <Field name="password" type="password" />
        <ErrorMessage name="password" />
      </div>
      <button>Submit</button>
    </Form>
  </div>
</template>

<script>
// ======================================================
//    Validation Using Vee-Validate schema and Yup
// ======================================================
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup"; // npm install yup --save

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
    };
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
span {
  color: red;
}
h2 {
  max-width: 300px;
  text-align: center;
  margin-bottom: 50px;
}
.form-group {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 30px;
}
</style>
