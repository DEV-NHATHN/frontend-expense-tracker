import "boxicons";
import "boxicons/css/boxicons.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ExpenseTracker from "./pages/ExpenseTracker";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 5 * 1000);
  }, []);

  return (
    <div className="App">
      {/* <ExpenseTracker />
       */}
      <div className="grid grid-cols-4 gap-5">
        {loading &&
          Array(4)
            .fill(0)
            .map((item, index) => <Card.Loading key={index}></Card.Loading>)}
        {!loading &&
          Array(4)
            .fill(0)
            .map((item, index) => <Card key={index}></Card>)}
      </div>
    </div>
  );
}

export default App;
