import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { KeyGiverDropsStats } from "../../types/KeyGiverDrop";
import classes from "./BarChart.module.css";

interface Props {
  keyGiverDropsStats: BarDatum[];
  title?: string;
  left?: number;
  top?: number;
  showLegend?: boolean;
}

export const BarChart = ({
  keyGiverDropsStats,
  title,
  left = 0,
  top = 0,
  showLegend = false,
}: Props) => {
  const data = keyGiverDropsStats;

  return (
    <div
      className={classes.BarChart}
      style={{ height: data.length * 70 + top + "px" }}
    >
      <ResponsiveBar
        ariaLabel={title || ""}
        data={data}
        keys={["drops", "keyGiversDone"]}
        indexBy="date"
        labelSkipHeight={10}
        labelSkipWidth={1}
        margin={{ top, right: 20, bottom: 0, left }}
        groupMode="grouped"
        layout="horizontal"
        padding={0.3}
        isInteractive={false}
        valueScale={{ type: "linear" }}
        colors={["var(--color-23-opacity-1)", "var(--color-26-opacity-1)"]}
        borderColor="red"
        theme={{
          textColor: "var(--color-10)",
          fontSize: 16,
          grid: {
            line: {
              stroke: "var(--color-26)",
              strokeWidth: 0,
            },
          },
        }}
        animate={true}
        enableLabel={true}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 0,
          tickPadding: 15,
        }}
        legends={
          showLegend
            ? [
                {
                  dataFrom: "keys",
                  anchor: "top-left",
                  direction: "column",
                  justify: false,
                  translateX: 0,
                  translateY: -top + 10,
                  itemsSpacing: 10,
                  itemWidth: 200,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 20,
                },
              ]
            : undefined
        }
      />
    </div>
  );
};
