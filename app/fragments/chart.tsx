"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type ChartProps = {
  days: string;
};

export default function Chart({ days }: ChartProps) {
  const { data, isLoading, error } = useSWR(
    `http://127.0.0.1:8000/api/sensors/average/?days=${days}`,
    fetcher
  );

  const chartData = data;

  const chartConfig = {
    equipment: {
      label: "Equipment",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  if (error) {
    return <p className="text-[22px]">Ocorreu um erro no servidor</p>;
  }

  if (isLoading) {
    return <p className="text-[22px]">Carregando...</p>;
  }

  if (!data.length) {
    return <p className="text-[22px]">Não há registros para o período</p>;
  }

  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="equipmentId"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="average_value"
            fill="var(--color-equipment)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}
