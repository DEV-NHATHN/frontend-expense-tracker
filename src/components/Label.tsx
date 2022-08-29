import { ChartItem } from "@src/models";
import { default as API } from "../redux/apiSlice";

const Label = () => {
  const { data, isFetching, isSuccess, isError } = API.useGetLabelsQuery();

  let Label;

  if (isFetching) {
    Label = <div>Fetching</div>;
  }

  if (isError) {
    Label = <div>Error</div>;
  }

  if (isSuccess) {
    Label = data?.map((item: ChartItem, index: number) => {
      return <LabelComponent data={item} key={index} />;
    });
  }

  return <>{Label}</>;
};

function LabelComponent({ data }: any) {
  if (!data) return null;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
}
export default Label;
