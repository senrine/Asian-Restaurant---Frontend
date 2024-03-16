import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Order, OrderLine } from "../types";
import { getIcon } from "../utils";

export default function Order() {
  const orders = useSelector((state: RootState) => state.order);

  console.log(orders.order);

  return (
    <div className="flex flex-col justify-center items-center text-primary-white font-Poppins w-full mx-auto">
      <hr className="w-full border-primary-white15 mb-20" />
      <div className="mb-20 md:mb-32">
        <h1 className="text-xl md:text-2xl font-semibold">The Menu</h1>
        <hr className="w-full border-primary-red rounded" />
      </div>
      <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-8 ">
        {orders &&
          orders.order.orderLine.map((orderLine: OrderLine) => (
            <li
              className="relative flex flex-col items-center mb-10 md:mb-20"
              key={orderLine.id}
            >
              <div className="min-w-36 md:min-w-48 lg:min-w-64 min-h-36 md:min-h-48 lg:min-h-64 bg-primary-red rounded-full absolute -z-10 blur-2xl md:blur-3xl"></div>
              <img
                className="h-36 md:h-48 lg:h-64 mb-6"
                src={getIcon(orderLine.menu.image)}
                alt={orderLine.menu.image}
              />
              <h1 className="font-Bellefair font-extralight text-title mb-4">
                {orderLine.menu.name}
              </h1>
              <p className="line-clamp-2 font-Poppins text-primary-white80 text-parapgraph text-center mb-4 lg:mb-10">
                {orderLine.menu.description}
              </p>
              <p className="font-Bellefair text-parapgraph mb-6">
                {orderLine.menu.price} $
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
