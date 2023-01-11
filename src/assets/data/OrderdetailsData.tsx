export interface OrdersItemTypes {
  id: number;
  product: string;
  customer: string;
  price: string;
  status: string;
}

const OrderDetails: OrdersItemTypes[] = [
  {
    id: 334,
    product: "Nike Air force",
    customer: "James Ishola",
    price: "$1000.69",
    status: "Delivered",
  },
  {
    id: 335,
    product: "Office wears",
    customer: "Felix J",
    price: "$25.19",
    status: "Declined",
  },
  {
    id: 336,
    product: "Gucci slides",
    customer: "Ayo Damola",
    price: "$162.03",
    status: "Delivered",
  },
  {
    id: 337,
    product: "Plain pants",
    customer: "Samson Idowu",
    price: "$87.34",
    status: "Pending",
  },
  {
    id: 338,
    product: "Winter Jackets",
    customer: "Philips Daniels",
    price: "$869.51",
    status: "Declined",
  },
];

export { OrderDetails };
