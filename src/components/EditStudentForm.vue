<template>
  <div
    class="edit-student-form border mt-14 p-8 rounded-lg max-w-max shadow-xl z-50 absolute left-[40%] bg-white"
  >
    <h3 class="text-center p-4">Edit Student</h3>
    <form @submit.prevent="submitEdit">
      <div class="py-2">
        <label for="nationalId">National ID:</label>
        <input
          id="nationalId"
          v-model="localStudent.nationalId"
          required
          type="number"
          class="border border-gray-300 ml-4 placeholder:p-2 rounded-sm"
          placeholder="National ID"
        />
      </div>
      <div class="py-2">
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="localStudent.name"
          required
          type="text"
          class="border border-gray-300 ml-14 placeholder:p-2 rounded-sm"
          placeholder="Name"
        />
      </div>
      <div class="py-2">
        <label for="surname">Surname:</label>
        <input
          id="surname"
          v-model="localStudent.surname"
          type="text"
          required
          class="border border-gray-300 ml-8 placeholder:p-2 rounded-sm"
          placeholder="Surname"
        />
      </div>
      <div class="py-2">
        <label for="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          v-model="localStudent.dob"
          required
          class="border border-gray-300 ml-4 placeholder:p-2 rounded-sm"
        />
      </div>
      <div class="py-2">
        <label for="studentNumber">Student Number:</label>
        <input
          id="studentNumber"
          v-model="localStudent.studentNumber"
          :readonly="isEditing"
          required
          class="border border-gray-300 ml-2 placeholder:p-2 rounded-sm"
          placeholder="Student Number"
          type="number"
        />
      </div>
      <button
        type="submit"
        class="mt-2 px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Update Student
      </button>
      <button
        type="button"
        @click="$emit('cancelEdit')"
        class="mt-2 px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-700"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "EditStudentForm",
  props: {
    student: {
      type: Object,
      required: true,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["updateStudent", "cancelEdit"],
  setup(props, { emit }) {
    const localStudent = ref({ ...props.student });

    // Watch for changes in the prop and update the local copy accordingly
    watch(
      () => props.student,
      (newVal) => {
        localStudent.value = { ...newVal };
      },
      { deep: true }
    );

    const submitEdit = () => {
      // const age =
      //   new Date().getFullYear() -
      //   new Date(localStudent.value.dob).getFullYear();
      // you can check for age if it was a criteria
      // if (age > 22) {
      //   alert("Student must be at most 3 years old");
      //   return;
      // }

      emit("updateStudent", localStudent.value);
    };

    return {
      localStudent,
      submitEdit,
    };
  },
};
</script>
