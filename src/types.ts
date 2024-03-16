export type Menu = {
  id: number;
  description: string;
  image: string;
  name: string;
  price: number;
  picked: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: number
}


export type Order = {
  id: number;
  user: User;
  orderLine: OrderLine;
  totalPrice: number;
  date: Date
}

export type OrderLine = {
  id:number;
  menu : Menu;
  quantity : number
}