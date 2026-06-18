export default class Student {
  constructor(data = {}) {
    this.id = data.id;
    this.userId = data.userId;
    this.enrollments = data.enrollments || [];
  }
}
