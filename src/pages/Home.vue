<script setup>
import DarkmodeSwitch from "../components/icons/home/DarkmodeSwitch.vue";
</script>

<template>
  <div class="main_home_page">
    <div class="main_page_wrapper">
      <div class="dark_mode_switch">
        <DarkmodeSwitch />
      </div>
      <div class="roomid_container">
        <div class="roomid_sub_container">
          <div>RoomId:</div>
          <input
            id="room_input"
            v-model="roomid"
            placeholder="Enter roomid here"
          />
          <button class="submit_roomid">Continue</button>
          <button class="submit_roomid">Create room for Saprate</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleMode() {
      // Toggle between dark and light mode
      this.isDarkMode = !this.isDarkMode;

      // You can also store the mode preference in localStorage or a global store
      // and apply it across different components.
    },
  },
};
</script>
<style scoped>
input {
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 30px;
  font-size: 14px;
  border: none;
  margin-top: 5px;
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

.main_home_page {
  height: 100vh;
  width: 100%;
}

.main_page_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.dark_mode_switch {
  display: flex;
  width: 90%;
  padding: 30px;
  justify-content: end;
}

.roomid_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.roomid_sub_container {
  max-width: 350px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
}
</style>
