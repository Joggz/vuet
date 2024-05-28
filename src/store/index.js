import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    teachers: [],
    students: [],
  }),
  actions: {
    addTeacher(teacher) {
      if (this.teachers.length === 0) {
        this.teachers.push(teacher);
      } else {
        if (
          this.teachers.find((t) => t.teacherNumber === teacher.teacherNumber)
        ) {
          alert("Teacher already exists");

          return;
        }
      }
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
      if (this.students.length === 0) {
        this.students.push(student);
      } else {
        if (
          this.students.find((s) => s.studentNumber === student.studentNumber)
        ) {
          alert("Student already exist");
          return;
        }
      }
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
