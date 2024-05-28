<template>
  <div class="z-10">
    <!-- start table -->
    <div class="container mx-auto mt-8">
      <EditStudentForm
        v-if="isEditing"
        :student="selectedStudent"
        :isEditing="true"
        @updateStudent="updateStudent"
        @cancelEdit="cancelEdit"
      />
      <table
        v-if="students.length > 0"
        class="min-w-full bg-white border border-gray-300"
      >
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Surname</th>
            <th class="py-2 px-4 border-b">Student Number</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.studentNumber">
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="student.name"
                class="w-full px-2 py-1 rounded text-center"
                :readonly="!student.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="student.surname"
                class="w-full px-2 py-1 rounded text-center"
                :readonly="!student.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="student.studentNumber"
                class="w-full px-2 py-1 rounded text-center"
                readonly
              />
            </td>
            <td class="py-2 px-4 border-b">
              <button
                @click="editStudent(index)"
                class="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                v-if="!student.isEditing"
              >
                Edit
              </button>
              <button
                @click="saveStudent(index)"
                class="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-700"
                v-if="student.isEditing"
              >
                Save
              </button>
              <button
                @click="deleteStudent(index)"
                class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center">
        <h3>Click the Add Students Tab to add Student</h3>
      </div>

      <!-- End Table -->
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../store";
import { computed, ref } from "vue";
import EditStudentForm from "./EditStudentForm.vue";

export default {
  name: "StudentList",
  components: {
    EditStudentForm,
  },
  setup() {
    const store = useMainStore();
    const students = computed(() => store.students);
    const isEditing = ref(false);
    const selectedStudent = ref(null);

    const editStudent = (student) => {
      selectedStudent.value = { ...store.students[student] };

      isEditing.value = true;
    };

    const updateStudent = (updatedStudent) => {
      store.editStudent(updatedStudent);
      isEditing.value = false;
      selectedStudent.value = null;
    };

    const cancelEdit = () => {
      isEditing.value = false;
      selectedStudent.value = null;
    };

    const deleteStudent = (studentNumber) => {
      selectedStudent.value = store.students[studentNumber];

      store.deleteStudent(selectedStudent.value.studentNumber);
    };

    return {
      students,
      isEditing,
      selectedStudent,
      editStudent,
      updateStudent,
      cancelEdit,
      deleteStudent,
    };
  },
};
</script>

<!-- <template>
  <div>
    <h2>Student List</h2>
    <ul>
      <li v-for="student in students" :key="student.studentNumber">
        {{ student.name }} {{ student.surname }} - {{ student.studentNumber }}
        <button @click="editStudent(student)">Edit</button>
        <button @click="deleteStudent(student.studentNumber)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useMainStore } from "../store";
import { computed } from "vue";

export default {
  name: "StudentList",
  setup() {
    const store = useMainStore();
    const students = computed(() => store.students);

    const editStudent = (student) => {
      this.$store.dispatch("editStudent", student);
      // Implement edit functionality
    };

    const deleteStudent = (studentNumber) => {
      store.deleteStudent(studentNumber);
    };

    return { students, editStudent, deleteStudent };
  },
};
</script> -->
