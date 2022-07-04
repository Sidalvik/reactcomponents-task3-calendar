import Calendar from './components/Calendar/Calendar'

function App() {
  const now = new Date(2022, 4, 5);
  // const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // return (
  //   <div>
  //     {month.map((item) => <Calendar date={new Date(2022, item, Math.round(Math.random() * 31))} key={item}/>)};
  //   </div>
  // )
  return (
    <div>
      <Calendar date={now} />;
    </div>
  )

}

export default App;
