export default class Plan {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
  }
}
