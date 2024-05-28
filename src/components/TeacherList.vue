<template>
  <div>
    <div class="container mx-auto mt-8 font-sans">
      <EditTeacherForm
        v-if="isEditing"
        :teacher="selectedTeacher"
        @updateTeacher="updateTeacher"
        @cancelEdit="cancelEdit"
        :isEditing="true"
      />
      <table
        v-if="teachers.length > 0"
        class="min-w-full bg-white border border-gray-300"
      >
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Surname</th>
            <th class="py-2 px-4 border-b">National ID</th>
            <th class="py-2 px-4 border-b">Title</th>
            <th class="py-2 px-4 border-b">Date of Birth</th>
            <th class="py-2 px-4 border-b">Teacher Number</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(teacher, index) in teachers" :key="teacher.teacherNumber">
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="teacher.name"
                class="w-full px-2 py-1 text-center rounded"
                :readonly="!teacher.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="teacher.surname"
                class="w-full px-2 py-1 text-center rounded"
                :readonly="!teacher.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="teacher.nationalId"
                class="w-full px-2 py-1 text-center rounded"
                :readonly="!teacher.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <select
                v-model="teacher.title"
                class="w-full px-2 py-1 text-center rounded"
                :disabled="!teacher.isEditing"
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Dr</option>
                <option>Prof</option>
              </select>
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="date"
                v-model="teacher.dob"
                class="w-full px-2 py-1 text-center rounded"
                :readonly="!teacher.isEditing"
              />
            </td>
            <td class="py-2 px-4 border-b">
              <input
                type="text"
                v-model="teacher.teacherNumber"
                class="w-full px-2 py-1 text-center rounded"
                readonly
              />
            </td>
            <td class="py-2 px-4 border-b">
              <button
                @click="editTeacher(index)"
                class="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                v-if="!teacher.isEditing"
              >
                Edit
              </button>
              <button
                @click="saveTeacher(index)"
                class="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-700"
                v-if="teacher.isEditing"
              >
                Save
              </button>
              <button
                @click="deleteTeacher(index)"
                class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center">
        <h3>Click the Add Teacher Tab to add Teacher</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../store";
import { computed, defineComponent, ref } from "vue";
import EditTeacherForm from "./EditTeacherForm.vue";

export default defineComponent({
  name: "TeacherList",
  components: {
    EditTeacherForm,
  },
  setup() {
    const store = useMainStore();
    const teachers = computed(() => store.teachers);
    const isEditing = ref(false);
    const selectedTeacher = ref(null);

    const editTeacher = (teacher) => {
      selectedTeacher.value = { ...store.teachers[teacher] };

      isEditing.value = true;
    };

    const updateTeacher = (updatedTeacher) => {
      store.editTeacher(updatedTeacher);

      isEditing.value = false;
      selectedTeacher.value = null;
    };

    const cancelEdit = () => {
      isEditing.value = false;
      selectedTeacher.value = null;
    };

    const deleteTeacher = (teacherNumber) => {
      selectedTeacher.value = store.teachers[teacherNumber];
      store.deleteTeacher(selectedTeacher.value.teacherNumber);
      isEditing.value = false;
    };

    return {
      teachers,
      isEditing,
      selectedTeacher,
      editTeacher,
      updateTeacher,
      cancelEdit,
      deleteTeacher,
    };
  },
});
</script>
