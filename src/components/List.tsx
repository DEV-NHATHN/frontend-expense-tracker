import { TransactionItem } from "@src/models";
import { default as API } from "../redux/apiSlice";

type Props = {};

const obj: TransactionItem[] = [
  {
    name: "Savings",
    color: "#36A2EB",
  },
  {
    name: "Investment",
    color: "#FF6384",
  },
  {
    name: "Expense",
    color: "#FFCD56",
  },
];

const List = (props: Props) => {
  const { data, isFetching, isSuccess, isError } = API.useGetLabelsQuery();

  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  }

  if (isError) {
    Transactions = <div>Error</div>;
  }

  if (isSuccess) {
    Transactions = data?.map((item: TransactionItem, index: number) => {
      return <Transaction category={item} key={index} />;
    });
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  );
};

type TransactionProps = {
  category: TransactionItem;
};

function Transaction({ category }: TransactionProps) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{
        borderRight: `
      8px solid ${category.color ?? "#e5e5e5"}`,
      }}
    >
      <button className="px-3">
        <i
          className="bx bx-trash"
          style={{ color: category.color ?? "#e5e5e5" }}
        ></i>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}
export default List;
