export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  serverId: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
}
