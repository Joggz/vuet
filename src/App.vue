<template>
  <div id="app" class="p-12 font-sans">
    <div class="border py-2 shadow-lg rounded-md">
      <nav
        class="flex flex-col items-center py-2 md:flex-row md:justify-evenly font-sans"
      >
        <router-link to="/teachers" class="py-2">Teachers</router-link>
        <router-link to="/students" class="py-2">Students</router-link>
        <router-link to="/add-teacher" class="py-2">Add Teacher</router-link>
        <router-link to="/add-student" class="py-2">Add Student</router-link>
      </nav>
    </div>

    <div class="border py-2 mt-2 min-h-[40vh]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add your styles here */
</style>

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <StudentForm />
  <TeacherForm />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import StudentForm from "./components/StudentForm.vue";
import TeacherForm from "./components/TeacherForm.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    StudentForm,
    TeacherForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
