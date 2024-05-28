import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    teachers: [],
    students: [],
  }),
  actions: {
    addTeacher(teacher) {
      this.teachers.push(teacher);
    },
    editTeacher(updatedTeacher) {
      const index = this.teachers.findIndex(
        (t) => t.teacherNumber === updatedTeacher.teacherNumber
      );
      if (index !== -1) {
        this.teachers.splice(index, 1, updatedTeacher);
      }
    },

    deleteTeacher(teacherNumber) {
      this.teachers = this.teachers.filter(
        (t) => t.teacherNumber !== teacherNumber
      );
    },
    addStudent(student) {
      this.students.push(student);
    },
    editStudent(updatedStudent) {
      const index = this.students.findIndex(
        (s) => s.studentNumber === updatedStudent.studentNumber
      );

      if (index !== -1) {
        this.students.splice(index, 1, updatedStudent);
      }
    },
    deleteStudent(studentNumber) {
      this.students = this.students.filter(
        (s) => s.studentNumber !== studentNumber
      );
    },
  },
});
