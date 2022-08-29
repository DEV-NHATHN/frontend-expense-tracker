import { TransactionItem } from "@src/models";
import _ from "lodash";

export const getSum = (transaction: TransactionItem[], type?: string) => {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount"); // [300, 350, 500]
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
};

export function getLabels(transaction: TransactionItem[]) {
  let amountSum = getSum(transaction, "type") as any;
  console.log("%c amountSum: ", "color:red", amountSum);
  let Total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

  return percent;
}

export function chart_Data(transaction: TransactionItem[], custom?: any) {
  let bg = _.map(transaction, (a) => a.color);
  bg = _.uniq(bg);
  let dataValue = getSum(transaction);

  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return custom ?? config;
}

export function getTotal(transaction: TransactionItem[]) {
  return _.sum(getSum(transaction));
}
