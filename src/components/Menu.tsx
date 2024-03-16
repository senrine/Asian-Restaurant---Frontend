import { useFetchMenuMutation } from "../features/menuApi";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMenu, setPicked } from "../features/menu";
import { Menu } from "../types";
import { getIcon, addPickedVariable } from "../utils";
import {
  useCreateOrderApiMutation,
  useUpdateMenuApiMutation,
  useGetOrderByIDMutation,
} from "../features/orderApi";
import { createOrUpdateOrder } from "../features/order";
import { useNavigate } from "react-router-dom";
import check from "../assets/CheckWhite.svg";

export default function Menu() {
  const menus = useSelector((state: RootState) => state.menus);
  const orders = useSelector((state: RootState) => state.order);
  const auth = useSelector((state: RootState) => state.auth);

  const order = orders.order;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fetchMenu] = useFetchMenuMutation();
  const [createOrderApi] = useCreateOrderApiMutation();
  const [updateOrderApi] = useUpdateMenuApiMutation();

  useEffect(() => {
    fetchMenu("")
      .unwrap()
      .then((response) => {
        const menu = addPickedVariable(response.data);
        dispatch(setMenu(menu));
      });
  }, []);

  const handleClick = async (e: FormEvent, menu: Menu) => {
    e.preventDefault();

    const id = menu.id;
    if (auth.userInfo) {
      const userId = auth.userInfo.id;
      try {
        if (order) {
          console.log({ menuId: [id] });
          const response = await updateOrderApi({
            data: { menuId: [id] },
            id: order.id,
          });
          dispatch(createOrUpdateOrder(response.data.data));
        } else {
          const response = await createOrderApi({ menuId: [id], userId });
          console.log(response);
          dispatch(createOrUpdateOrder(response.data.data));
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-primary-white font-Poppins w-full mx-auto">
      <hr className="w-full border-primary-white15 mb-20" />
      <div className="mb-20 md:mb-32">
        <h1 className="text-xl md:text-2xl font-semibold">The Menu</h1>
        <hr className="w-full border-primary-red rounded" />
      </div>
      <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-8 ">
        {menus &&
          menus.menu.map((menu: Menu) => (
            <li
              className="relative flex flex-col items-center mb-10 md:mb-20"
              key={menu.id}
            >
              <div className="min-w-36 md:min-w-48 lg:min-w-64 min-h-36 md:min-h-48 lg:min-h-64 bg-primary-red rounded-full absolute -z-10 blur-2xl md:blur-3xl"></div>
              <img
                className="h-36 md:h-48 lg:h-64 mb-6"
                src={getIcon(menu.image)}
                alt={menu.image}
              />
              <h1 className="font-Bellefair font-extralight text-title mb-4">
                {menu.name}
              </h1>
              <p className="line-clamp-2 font-Poppins text-primary-white80 text-parapgraph text-center mb-4 lg:mb-10">
                {menu.description}
              </p>
              <p className="font-Bellefair text-parapgraph mb-6">
                {menu.price} $
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setPicked(menu.id));
                  handleClick(e, menu);
                }}
                className={`${
                  menu.picked ? "bg-primary-red" : "bg-primary-red80"
                } flex justify-between items-center py-1 px-3 rounded-full text-button font-semibold hover:bg-primary-red hover:text-primary-white`}
              >
                {menu.picked && (
                  <img src={check} alt="check" className="w-3 h-3 mr-2" />
                )}
                {menu.picked ? "Picked" : "Order"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
