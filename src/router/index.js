import { createRouter, createWebHistory } from "vue-router";
import TeacherForm from "../components/TeacherForm.vue";
import StudentForm from "../components/StudentForm.vue";
import TeacherList from "../components/TeacherList.vue";
import StudentList from "../components/StudentList.vue";

const routes = [
  { path: "/teachers", component: TeacherList },
  { path: "/students", component: StudentList },
  { path: "/add-teacher", component: TeacherForm },
  { path: "/add-student", component: StudentForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
