<template>
  <div class="p-8 w-[70%] mx-auto">
    <form @submit.prevent="saveTeacher" class="">
      <div class="py-2">
        <label for="nationalId" class="w-[15%]">National ID:</label>
        <input
          placeholder="National ID"
          id="nationalId"
          v-model="teacher.nationalId"
          required
          type="number"
          class="w-[85%] ml-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="title" class="w-[15%]">Title:</label>
        <select
          id="title"
          v-model="teacher.title"
          required
          class="border ml-16 border-gray-300focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg"
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>
      </div>
      <div class="py-2">
        <label for="name" class="w-[15%]">Name:</label>
        <input
          id="name"
          v-model="teacher.name"
          placeholder=" Name"
          required
          type="text"
          class="w-[85%] ml-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="surname" class="w-[15%]">Surname:</label>
        <input
          id="surname"
          v-model="teacher.surname"
          placeholder="Surname"
          required
          type="text"
          class="w-[85%] ml-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="dob" class="w-[15%]">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          placeholder="DOB"
          v-model="teacher.dob"
          class="w-[85%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div class="py-2">
        <label for="teacherNumber" class="w-[15%]">Teacher Number:</label>
        <input
          id="teacherNumber"
          placeholder="Teacher Number"
          type="number"
          v-model="teacher.teacherNumber"
          class="w-[85%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div class="py-2">
        <label for="salary" class="w-[15%]">Salary:</label>
        <input
          id="salary"
          placeholder="Salary"
          v-model="teacher.salary"
          type="number"
          class="w-[85%] ml-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        class="border w-[80%] ml-24 bg-blue-500 text-white mt-5 p-4 rounded-lg"
      >
        Save Teacher
      </button>
    </form>
  </div>
</template>

<script>
import { useMainStore } from "../store";
import { ref } from "vue";

export default {
  name: "TeacherForm",
  setup() {
    const store = useMainStore();
    const teacher = ref({
      nationalId: "",
      title: "Mr",
      name: "",
      surname: "",
      dob: "",
      teacherNumber: "",
      salary: "",
    });

    const saveTeacher = () => {
      // Validate age
      const age =
        new Date().getFullYear() - new Date(teacher.value.dob).getFullYear();
      if (age < 21) {
        alert("Teacher must be at least 21 years old");
        return;
      }

      store.addTeacher(teacher.value);
      teacher.value = {
        nationalId: "",
        title: "",
        name: "",
        surname: "",
        dob: "",
        teacherNumber: "",
        salary: "",
      };
    };

    return { teacher, saveTeacher };
  },
};
</script>
