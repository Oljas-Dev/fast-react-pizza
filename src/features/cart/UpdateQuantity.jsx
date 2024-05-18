import PropType from "prop-types";

import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

UpdateQuantity.propTypes = {
  pizzaId: PropType.any,
  currentQuantity: PropType.number,
};

function UpdateQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="border-b border-t border-slate-400 text-sm font-bold">
        {currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
