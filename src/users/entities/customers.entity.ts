export class Customer {
  id: number;
  name: string;
  email: string;
  telefono: string;
  customerPoints: number;
  rol: 'admin' | 'client' | 'user';
}
