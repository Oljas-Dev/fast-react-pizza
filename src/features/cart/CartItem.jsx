import { formatCurrency } from "../../utilities/helpers";
import PropType from "prop-types";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

CartItem.propTypes = {
  item: PropType.any,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} currentQuntity={currentQuantity} />
        <DeleteItem pizzaID={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
