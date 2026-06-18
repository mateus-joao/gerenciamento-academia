export default class Payment {
  constructor(data = {}) {
    this.id = data.id;
    this.enrollmentId = data.enrollmentId;
    this.amount = data.amount;
  }
}
