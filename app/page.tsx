"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import Chart from "./fragments/chart";

export default function Home() {
  const [daysPeriod, setDaysPeriod] = useState("720");
  return (
    <main className="flex items-center justify-center flex-col px-1 xl:px-32 2xl:px-60 sm:px-4 mt-4">
      <h2 className="text-[26px] font-medium">
        Monitore em tempo real sensores de equipamentos de estações de óleo e
        gás
      </h2>
      <div className="flex rounded-md border border-solid border-slate-800 p-10 w-full flex-col mt-2">
        <h3 className="text-[24px] mb-2">Selecione o período:</h3>
        <div className="flex flex-col">
          <RadioGroup
            defaultValue="720"
            onValueChange={(days) => setDaysPeriod(days)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="720" id="r1" defaultChecked />
              <Label htmlFor="r1" className="text-[22px]">
                Todo o tempo
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="r2" />
              <Label htmlFor="r2" className="text-[22px]">
                Últimas 24 horas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="r3" />
              <Label htmlFor="r3" className="text-[22px]">
                Últimas 48 horas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="7" id="r4" />
              <Label htmlFor="r4" className="text-[22px]">
                Última semana
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30" id="r5" />
              <Label htmlFor="r5" className="text-[22px]">
                Último mês
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex rounded-md border border-solid border-slate-800 p-10 w-full my-4">
        <Chart days={daysPeriod} />
      </div>
    </main>
  );
}
