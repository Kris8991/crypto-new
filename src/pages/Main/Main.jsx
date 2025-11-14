import style from "./style.module.css";
import Card from "../../components/Card/Card";

const Main = ({ balance, setBalance }) => {
  console.log(balance);
  return (
    <main className={style.main}>
      <Card balance={balance} setBalance={setBalance} />
    </main>
  );
};
export default Main;
