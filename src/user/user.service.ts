import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  registerUser(name: string): User {
    const newUser = { id: this.idCounter++, name };
    this.users.push(newUser);
    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }
}