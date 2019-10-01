export class UserDTO {

  username: string;
  email: string;

  constructor(name: string, email: string) {
    this.username = name;
    this.email = email;
  }
}
