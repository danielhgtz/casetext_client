import { UserProvider } from "./context/UserContext";
import Atm from "./pages/atm/atm";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Atm />
    </UserProvider>
  );
}

export default App;
