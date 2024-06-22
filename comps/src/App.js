import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: "12scd",
      label: "Lol",
      content:
        "content 1 -> \n juhcgvhjbknsd buicsfba hfdbvkb jkdcsa kjsbda dsafkubj kjasdfb sdkjaf",
    },
    {
      id: "12scsfdgd",
      label: "Lol 2",
      content:
        "content 2 ->\n sfdajfn kjqfn oifqen okifqn okifn okifqen oikqfen oiefqn oifn eqofin eqoifn ",
    },
    {
      id: "12svdfbgcd",
      label: "Lol 3",
      content:
        "content 3 ->\n advfjn oinfqe asokkn voi asondi sapfjdopsidjnasojd oiqswfnjasofjd asndj asopjd aosnjdi ",
    },
  ];
  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  );
}

export default App;
