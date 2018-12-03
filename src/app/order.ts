export class Order {
  constructor(public id: number,
              public name: string,
              public status: string,
              public createdWhen: string,
              public comments: string) {
  }
}
