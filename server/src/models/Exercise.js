export default class Exercise {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.repetitions = data.repetitions;
  }
}
