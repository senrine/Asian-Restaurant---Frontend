import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import up from "../assets/Up.svg";
import down from "../assets/Down.svg";
import vip from "../assets/Vip.svg";
import standard from "../assets/Standard.svg";
import {
  changeDeliveryToSpeed,
  changeDeliveryToStandard,
} from "../features/order";

export default function DelieveryOption() {
  const [drop, setDrop] = useState(false);

  const orders = useSelector((state: RootState) => state.order);

  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          setDrop(!drop);
        }}
        className="w-full flex justify-center items-center mt-10 md:mt-16 mb-2 md:mb-4 px-10 md:px-20"
      >
        <p className="mr-auto text-[18px] md:text-[20px] font-Bellefair">
          Delivery Option
        </p>
        <img className="inline-block w-4" src={`${drop ? up : down}`} alt="" />
      </div>
      <div
        className={`${
          drop ? "" : "hidden"
        } w-full px-10 md:px-20 mb-2 md:mb-4 mt-4 md:mt-6`}
      >
        <button
          onClick={() => {
            dispatch(changeDeliveryToSpeed());
          }}
          className={`w-full px-4 py-2 rounded-xl bg-primary-gray border ${
            orders.order.speedDelivery
              ? "border-primary-red"
              : "border-primary-white15"
          } flex justify-center items-center mb-4 md:mb-6`}
        >
          <img className="w-5 mr-4 md:mr-6" src={vip} alt="" />
          <div className="flex-col mr-auto">
            <p className="font-Bellefair">Speed Delivery</p>
            <p>15 - 20 min</p>
          </div>
          <p className="text-md md:text-xl font-semibold">+ 2$</p>
        </button>
        <button
          onClick={() => dispatch(changeDeliveryToStandard())}
          className={`w-full px-4 py-2 rounded-xl bg-primary-gray border ${
            orders.order.standardDelivery
              ? "border-primary-red"
              : "border-primary-white15"
          } flex justify-center items-center mb-4 md:mb-6`}
        >
          <img className="w-5 mr-4 md:mr-6" src={standard} alt="" />
          <div className="flex-col mr-auto">
            <p className="font-Bellefair">Standard Delivery</p>
            <p>30 - 45 min</p>
          </div>
        </button>
      </div>
      <hr className="w-full border-primary-white15 rounded" />
    </>
  );
}
