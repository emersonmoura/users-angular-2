
export class User {
  login?: string;
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

  get uuid() : string {
    return this.login['uuid'];
  }
}


