export class User {
  id: number;
  name: string;
  rol: 'admin' | 'client' | 'user';
  email: string;
  password: string;
}
