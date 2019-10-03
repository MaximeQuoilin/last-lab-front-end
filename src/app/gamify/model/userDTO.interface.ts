export class UserDTO {

  id: number;
  username: string;
  email: string;

  constructor(id: number, name: string, email: string) {

    this.id = id;
    this.username = name;
    this.email = email;
  }
}
