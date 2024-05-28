<template>
  <div class="p-8 w-[70%] mx-auto">
    <form @submit.prevent="saveStudent">
      <div class="py-2">
        <label for="nationalId">National ID:</label>
        <input
          placeholder="National ID"
          id="nationalId"
          v-model="student.nationalId"
          required
          type="number"
          class="w-[85%] ml-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          v-model="student.name"
          required
          placeholder=" Name"
          class="w-[85%] ml-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          placeholder="Surname"
          v-model="student.surname"
          required
          class="w-[85%] ml-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label for="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          v-model="student.dob"
          required
          class="w-[85%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="py-2">
        <label for="studentNumber">Student Number:</label>
        <input
          id="studentNumber"
          v-model="student.studentNumber"
          required
          type="number"
          class="w-[85%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        class="border w-[80%] ml-24 bg-blue-500 text-white mt-5 p-4 rounded-lg"
      >
        Save Student
      </button>
    </form>
  </div>
</template>

<script>
import { useMainStore } from "../store";
import { ref } from "vue";

export default {
  name: "StudentForm",
  setup() {
    const store = useMainStore();
    const student = ref({
      nationalId: "",
      name: "",
      surname: "",
      dob: "",
      studentNumber: "",
    });

    const saveStudent = () => {
      // const age =
      //   new Date().getFullYear() - new Date(student.value.dob).getFullYear();
      // if (age > 22) {
      //   alert("Student must be at most 22 years old");
      //   return;
      // }

      store.addStudent(student.value);
      student.value = {
        nationalId: "",
        name: "",
        surname: "",
        dob: "",
        studentNumber: "",
      };
    };

    return { student, saveStudent };
  },
};
</script>
