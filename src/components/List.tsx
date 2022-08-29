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
  const { data, isFetching, isSuccess, isError } = API.useGetLabelsQuery("");
  const [deleteTransaction] = API.useDeleteTransactionMutation();
  let Transactions;

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLButtonElement;

    if (!target.dataset.id) return 0;
    else {
      /// event handler logic
      console.log(target.dataset.id);
      await deleteTransaction({ _id: target.dataset.id });
    }
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  }

  if (isError) {
    Transactions = <div>Error</div>;
  }

  if (isSuccess) {
    Transactions = data?.map((item: TransactionItem, index: number) => {
      return <Transaction category={item} key={index} handler={handleClick} />;
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
  handler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Transaction({ category, handler }: TransactionProps) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{
        borderRight: `
      8px solid ${category.color ?? "#e5e5e5"}`,
      }}
    >
      <button className="px-3" onClick={handler}>
        <i
          className="bx bx-trash"
          style={{ color: category.color ?? "#e5e5e5" }}
          data-id={category._id ?? ""}
        ></i>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}
export default List;
