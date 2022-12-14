import { useForm } from "react-hook-form";
import List from "./List";
import { default as API } from "../redux/apiSlice";

type FormProps = {};

const Form = (props: FormProps) => {
  const { register, handleSubmit, resetField } = useForm();

  const [addTransaction] = API.useAddTransactionMutation();

  const onSubmit = async (data: any) => {
    if (!data) return;
    console.log(data);
    await addTransaction(data).unwrap();

    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, House Rend, SIP"
              className="form-input"
              {...register("name")}
            />
          </div>

          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue="Investment">
              Investment
            </option>
            <option value="Expense" defaultValue="Expense">
              Expense
            </option>
            <option value="Savings" defaultValue="Savings">
              Savings
            </option>
          </select>

          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>

          <div className="submit-btn">
            <button
              className="border py-2 text-white bg-indigo-500 w-full"
              type="submit"
            >
              Make Transaction
            </button>
          </div>
        </div>
      </form>

      <List />
    </div>
  );
};
export default Form;
