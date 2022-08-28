import { ChartItem } from "@src/models";

type LabelProps = {
  obj: ChartItem[];
};

const Label = ({ obj }: LabelProps) => {
  return (
    <>
      {obj.map((item: ChartItem, index: number) => {
        return <LabelComponent data={item} key={index} />;
      })}
    </>
  );
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
