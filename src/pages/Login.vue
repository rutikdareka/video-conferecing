<template>
  <div class="login-container">
    <div class="login_sub_container">
      <div class="heading_part">
        <img src="https://lh3.googleusercontent.com/a/AEdFTp6S_-rtGY8coOct0QsxuQJhdkv63Ts2gyxs0YBQDQ=s96-c" alt="">
        <h1 style="font-weight: bold;">Creto</h1>
      </div>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Add your login logic here
      console.log("Logging in with:", this.username, this.password);
    },
  },
};
</script>

<style scoped>
.login-container {
    max-width: 350px;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 1rem;
}

.heading_part {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.heading_part img {
    border-radius: 50%;
    height: 60px;
    width: 60px;
}

.login_sub_container {
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(138, 135, 135, 0.1);
  padding: 30px;
  min-width: 300px;
  
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 30px;
  font-size: 14px;
  border: none;
}

input:focus {
    transition: 0.3s all ease-in-out;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 12px;
  border: none;
  border-radius: 30px;

  font-size: 14px;
  cursor: pointer;
}
</style>
