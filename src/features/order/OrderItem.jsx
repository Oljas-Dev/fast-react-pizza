import { formatCurrency } from "../../utilities/helpers";

import PropType from "prop-types";

OrderItem.propTypes = {
  item: PropType.object,
  isLoadingIngredients: PropType.bool,
  ingredients: PropType.array,
};

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 ">
      <div className="flex items-center justify-between gap-4 space-y-1 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
