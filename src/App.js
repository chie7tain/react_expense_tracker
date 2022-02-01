import "./App.css";
import { Ballance } from "./components/Ballance/Ballance";
import { Header } from "./components/Header/Header";
import { IncomeExpense } from "./components/IncomeExpense/IncomeExpense";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { GlobalStateProvider } from "./context/GlobalState";
const App = () => (
  <div className="App">
    <GlobalStateProvider>
      <Header />
      <Ballance />
      <IncomeExpense />
      <TransactionList />
    </GlobalStateProvider>
  </div>
);

export default App;
