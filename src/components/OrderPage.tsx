import { useSelector } from "react-redux";
import { RootState } from "../store";
import Order from "./Order";
import CheckoutInfo from "./CheckoutInfo";
import DelieveryOption from "./DelieveryOption";
import { useEffect } from "react";
import { addDeliveryVariable } from "../utils";

export default function OrderPage() {
  const orders = useSelector((state: RootState) => state.order);

  useEffect(() => {
    console.log(addDeliveryVariable(orders.order));
  }, []);

  return (
    <div className="mt-24 flex flex-col justify-center items-center text-primary-white font-Poppins w-full mx-auto md:px-24 pb-20">
      <div className="mb-8 md:mb-10 px-10 md:px-20">
        <h1 className="text-xl md:text-2xl font-Bellefair">My Order</h1>
        <hr className="w-full border-primary-red rounded" />
      </div>
      {orders.order && orders.order?.totalPrice !== 0 && (
        <>
          <Order />
          <div className="w-full flex justify-center items-center mb-2 md:mb-4 px-10 md:px-20">
            <p className="mr-auto text-[18px] md:text-[20px] font-Bellefair">
              Sub Total
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              {orders.order.totalPrice} $
            </p>
          </div>
          {orders.order.speedDelivery && (
            <>
              <div className="w-full flex justify-center items-center mb-2 md:mb-4 px-10 md:px-20">
                <p className="mr-auto text-[16px] md:text-[18px] font-Bellefair">
                  Delivery
                </p>
                <p className="text-md md:text-lg font-semibold">2 $</p>
              </div>
              <div className="w-full flex justify-center items-center mb-2 md:mb-4 px-10 md:px-20">
                <p className="mr-auto text-[18px] md:text-[20px] font-Bellefair">
                  Total
                </p>
                <p className="text-xl md:text-2xl font-semibold">
                  {orders.order.totalPrice + 2}$
                </p>
              </div>
            </>
          )}
          <hr className="w-full border-primary-white15 rounded" />
          <CheckoutInfo />
          <DelieveryOption />
          <div className="px-10 md:px-20 w-full">
            <button className="mt-10 md:mt-16 ml-auto block hover:bg-primary-red bg-primary-red80 border border-primary-white15 py-1 px-3 rounded text-[18px] md:text-[20px]">
              Checkout
            </button>
          </div>
        </>
      )}

      {(orders.order === null || orders.order?.totalPrice === 0) && (
        <>
          <p className="text-center mb-4 md:mb-8 text-[14px] md:text-[18px]">
            You did not order any food, click here to go to the menu.
          </p>
          <a
            href="/"
            className="py-1 px-3 rounded-full text-[12px] md:text-[14px] font-semibold hover:bg-primary-red hover:text-primary-white bg-primary-red80 border border-primary-white15"
          >
            Get Order
          </a>
        </>
      )}
    </div>
  );
}
