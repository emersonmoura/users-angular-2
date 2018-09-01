
export class User {
  name?: string;
  email?: string;
  phone?: string;

  deserialize?(input: any) {
    Object.assign(this, input);
    return this;
  }

  get firstName() : string {
    return this.name['first'];
  }

  get lastName() : string {
    return this.name['last'];
  }
}


