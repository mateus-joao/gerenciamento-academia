export default class Workout {
  constructor(data = {}) {
    this.id = data.id;
    this.title = data.title;
    this.exercises = data.exercises || [];
  }
}
