import {
  useDeleteOrMinusOneMenuMutation,
  useUpdateMenuApiMutation,
} from "../features/orderApi";
import { createOrUpdateOrder } from "../features/order";
import { useDispatch } from "react-redux";

interface MoreOrLessBtnProps {
  count: number;
  orderId: number;
  menuId: number;
}

const MoreOrLessBtn: React.FC<MoreOrLessBtnProps> = ({
  count,
  orderId,
  menuId,
}) => {
  const dispatch = useDispatch();
  const [deleteOrMinusOneMenu] = useDeleteOrMinusOneMenuMutation();
  const [updateMenuApi] = useUpdateMenuApiMutation();

  async function handleAdd() {
    console.log(menuId);

    try {
      const response = await updateMenuApi({
        data: { menuId: [menuId] },
        id: orderId,
      });
      console.log(response);
      dispatch(createOrUpdateOrder(response));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleMinus(count: number) {
    if (count > 1) {
      try {
        const response = await deleteOrMinusOneMenu({
          data: { menuId, delete: false, minusOne: true },
          id: orderId,
        });
        console.log(response);
        dispatch(createOrUpdateOrder(response));
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="flex justify-between border border-primary-white15 text-primary-white font-Poppins rounded-full text-[12px] md:text-[18px]">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className="px-3 py-1 bg-primary-white15 rounded-l-full"
      >
        +
      </button>
      <p className="px-4 py-1">{count}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleMinus(count);
        }}
        className={`px-3 py-1 ${
          count === 1
            ? "text-primary-white15 border-l border-l-primary-white15"
            : "bg-primary-white15"
        } rounded-r-full`}
      >
        -
      </button>
    </div>
  );
};

export default MoreOrLessBtn;
