export default class Enrollment {
  constructor(data = {}) {
    this.id = data.id;
    this.studentId = data.studentId;
    this.planId = data.planId;
  }
}
