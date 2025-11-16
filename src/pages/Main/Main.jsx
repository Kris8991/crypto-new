import style from "./style.module.css";
import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/ConsList";

const Main = ({ balance, setBalance, coins }) => {
  console.log(balance);
  return (
    <main className={style.main}>
      <Card balance={balance} setBalance={setBalance} />
      {coins.length > 0 ? <CoinsList coins={coins} /> : <div>Loading...</div>}
    </main>
  );
};
export default Main;
