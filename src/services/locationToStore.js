
//Redux
import { useDispatch } from "react-redux";
import { changeLocation } from "../redux/actions";

const locationToStore = (location) => {
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLocation(currentPath));
  }, []);
}

