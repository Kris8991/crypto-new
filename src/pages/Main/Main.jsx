import style from "./style.module.css";
import Card from "../../components/Card/Card";
import CoinsList from "../../components/CoinsList/ConsList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

const Main = ({ balance, setBalance, coins, filteredCoins, setCoins }) => {
  console.log(balance);
  return (
    <main className={style.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};
export default Main;
