import Card from "./components/Card";
import poster1 from "./assets/poster1.png";
import poster2 from "./assets/poster2.png";
import poster3 from "./assets/poster3.png";
import BtnComprar from "./components/BtnComprar";

export default function App() {
  return (
    <>
      <BtnComprar text="Ir ao blog"/>
      <Card title="Pôster: Star Wars (1977)" posterImg={poster1}/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={poster2}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={poster3}/>
    </>
  )
}
