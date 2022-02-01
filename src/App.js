import "./App.css";
import { Ballance } from "./components/Ballance/Ballance";
import { Header } from "./components/Header/Header";
import { IncomeExpense } from "./components/IncomeExpense/IncomeExpense";
import { TransactionList } from "./components/TransactionList/TransactionList";

const App = () => (
  <>
    <Header />
    <Ballance />
    <IncomeExpense />
    <TransactionList/>
  </>
);

export default App;
