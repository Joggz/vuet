<template>
  <div
    class="edit-teacher-form border mt-14 p-8 rounded-lg max-w-max shadow-xl z-50 absolute left-[40%] bg-white"
  >
    <h3 class="text-center p-4">Edit Teacher</h3>
    <form @submit.prevent="submitEdit">
      <div class="py-2">
        <label for="nationalId">National ID:</label>
        <input
          id="nationalId"
          v-model="localTeacher.nationalId"
          required
          class="border border-gray-300 ml-2"
        />
      </div>

      <div class="py-2">
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="localTeacher.name"
          required
          class="border border-gray-300 ml-10"
        />
      </div>
      <div class="py-2">
        <label for="surname">Surname:</label>
        <input
          id="surname"
          v-model="localTeacher.surname"
          required
          class="border border-gray-300 ml-4"
        />
      </div>
      <div class="py-2">
        <label for="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          v-model="localTeacher.dob"
          required
          class="border border-gray-300"
        />
      </div>
      <!-- <div class="py-2">
        <label for="teacherNumber">Teacher Number:</label>
        <input
          id="teacherNumber"
          v-model="localTeacher.teacherNumber"
          required
          class="border border-gray-300"
        />
      </div> -->
      <div class="py-2">
        <label for="salary">Salary:</label>
        <input
          id="salary"
          v-model="localTeacher.salary"
          class="border border-gray-300 ml-8"
        />
      </div>
      <button
        type="submit"
        class="mt-2 px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Update Teacher
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
  name: "EditTeacherForm",
  props: {
    teacher: {
      type: Object,
      required: true,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["updateTeacher", "cancelEdit"],
  setup(props, { emit }) {
    const localTeacher = ref({ ...props.teacher });

    // Watch for changes in the prop and update the local copy accordingly
    watch(
      () => props.teacher,
      (newVal) => {
        localTeacher.value = { ...newVal };
      },
      { deep: true }
    );

    const submitEdit = () => {
      // Validate age
      // const age =
      //   new Date().getFullYear() -
      //   new Date(localTeacher.value.dob).getFullYear();
      // if (age < 21) {
      //   alert("Teacher must be at least 21 years old");
      //   return;
      // }

      emit("updateTeacher", localTeacher.value);
    };

    return {
      localTeacher,
      submitEdit,
    };
  },
};
</script>
