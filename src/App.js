import Calendar from './components/Calendar/Calendar'

function App() {
  const now = new Date();
  // const year = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => <Calendar date={new Date(2022, item, Math.round(Math.random() * 31))} key={item}/>);

  return (
    <div>
      <Calendar date={now} />
      {/* {year} */}
    </div>
  )
}

export default App;
