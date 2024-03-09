import { useFetchMenuMutation } from "../features/menuApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMenu } from "../features/menu";
import { Menu } from "../types";
import { getIcon } from "../utils";

export default function Menu() {
  const menus = useSelector((state: RootState) => state.menus);
  const dispatch = useDispatch();
  const [fetchMenu] = useFetchMenuMutation();

  useEffect(() => {
    fetchMenu("")
      .unwrap()
      .then((response) => {
        dispatch(setMenu(response.menus));
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-24 text-primary-white font-Poppins w-full mx-auto">
      <hr className="w-full border-primary-white15 mb-10" />
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
              <h1 className="font-Bellefair font-extralight text-[20px] lg:text-[24px] mb-4">
                {menu.name}
              </h1>
              <p
                className="line-clamp-2	font-Poppins text-primary-white80 text-[14px] lg:text-[18px] text-center mb-4 lg:mb-10"
              >
                {menu.description}
              </p>
              <p className="font-Bellefair text-[18px] lg:text[24px] mb-6">
                {menu.price} $
              </p>
              <button
                onClick={() => {
                  if (!menu.picked) {
                    console.log("picked");
                  }
                }}
                className={`${
                  menu.picked ? "bg-primary-red" : "bg-primary-red80"
                } py-1 px-3 rounded-full text-[12px] md:text-[18px] font-semibold hover:bg-primary-red hover:text-primary-white`}
              >
                Order
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
