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
  adress: string;
  phoneNumber: number
}