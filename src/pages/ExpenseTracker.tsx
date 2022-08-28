import Form from "../components/Form";
import Graph from "../components/Graph";

type Props = {};

const ExpenseTracker = (props: Props) => {
  return (
    <>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph />
          {/* Form */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
