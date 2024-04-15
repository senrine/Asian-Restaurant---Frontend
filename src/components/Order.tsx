import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Order, OrderLine } from "../types";
import { getIcon } from "../utils";
import { useDispatch } from "react-redux";
import { useDeleteOrMinusOneMenuMutation } from "../features/orderApi";
import { createOrUpdateOrder } from "../features/order";
import MoreOrLessBtn from "./MoreOrLessBtn";

export default function Order() {
  const orders = useSelector((state: RootState) => state.order);

  const dispatch = useDispatch();
  const [deleteOrMinusOneMenu] = useDeleteOrMinusOneMenuMutation();

  async function handleDelete(menuId: number, orderId: number) {
    console.log(menuId);

    try {
      const response = await deleteOrMinusOneMenu({
        data: { menuId, delete: true, minusOne: false },
        id: orderId,
      });
      console.log(response);
      dispatch(createOrUpdateOrder(response));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <ul className="grid min-[500px]:grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20">
        {orders.order !== null &&
          orders.order.orderLine.map((orderLine: OrderLine) => (
            <li
              className="relative flex flex-col items-center justify-center mb-10 md:mb-20"
              key={orderLine.id}
            >
              <div className="relative flex flex-col items-center justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(orderLine.menu.id, orders.order.id);
                  }}
                  className="rounded-full bg-primary-white15 ml-auto px-2 text-primary-black font-bold text-[12px] md:text-[14px]"
                >
                  x
                </button>
                <div className="min-w-36 md:min-w-40 lg:min-w-44 min-h-36 md:min-h-40 lg:min-h-min-w-44 bg-primary-red rounded-full absolute -z-10 blur-xl md:blur-2xl"></div>
                <img
                  className="h-36 md:h-40 lg:h-44 mb-6 relative flex-shrink-0"
                  src={getIcon(orderLine.menu.image)}
                  alt={orderLine.menu.image}
                />
              </div>
              <h1 className="font-Bellefair font-extralight text-title mb-4">
                {orderLine.menu.name}
              </h1>
              <p className="line-clamp-2 font-Poppins text-primary-white80 text-parapgraph text-center mb-4 lg:mb-10">
                {orderLine.menu.description}
              </p>
              <p className="font-Bellefair text-parapgraph mb-6">
                {orderLine.menu.price} $
              </p>
              <MoreOrLessBtn
                count={orderLine.quantity}
                orderId={orders.order.id}
                menuId={orderLine.menu.id}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
