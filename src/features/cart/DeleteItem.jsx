import PropType from "prop-types";

import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui/Button";

DeleteItem.propTypes = {
  pizzaID: PropType.any,
};

function DeleteItem({ pizzaID }) {
  const dispatch = useDispatch();

  function handleDeletePizza() {
    dispatch(deleteItem(pizzaID));
  }
  return (
    <Button type="small" onClick={handleDeletePizza}>
      delete
    </Button>
  );
}

export default DeleteItem;
