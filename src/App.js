import { useEffect } from "react";
import AppRouter from "./routes";
import { setUserData } from "./store/users/userActions";
import { useDispatch } from "react-redux";
import { mockData } from "./utils";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData(mockData));
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
