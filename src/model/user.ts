export interface IUser {
    email: string;
    name: string;
    stack: string; 
}

export default class User {
  email: string = "joelchimaobichukwu@gmail.com";
  name: string = "Chukwu Joel Chimaobi";
  hashed_password!: string;
  stack: string = "Backend";
  phone!: string;
  role_id?: number;
  team_id?: number;
  created_at!: Date;
  updated_at?: Date;
}