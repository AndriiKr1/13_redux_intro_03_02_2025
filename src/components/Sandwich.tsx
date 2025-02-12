import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxRTK/storeRTK";
import { add, clear } from "../reduxRTK/sandwichSlice";

const Sandwich = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();
  return (
    <div>
      <p>Ingredients: {ingredients.join(", ")} </p>
      <button className="btn btn-light btn-sm "
        onClick={() => dispatch(add("bread"))}
      >
        Add bread
      </button>
      <button className="btn btn-light btn-sm"
        onClick={() => dispatch(add("cheese"))}
      >
        Add cheese
      </button>
      <button className="btn btn-light btn-sm"
        onClick={() => dispatch(add("salami"))}
      >
        Add salami
      </button>
      <button className="btn btn-light btn-sm"
        onClick={() => dispatch(add("tomato"))}
      >
        Add tomato
      </button>
      <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(clear())}>
        Delete all ingredients
      </button>
    </div>
  );
};

export default Sandwich;
