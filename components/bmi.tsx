"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@nextui-org/input";

interface Result {
  bmi?: number;
  status?: string;
}

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const [result, setResult] = useState<Result>({});

  const getResult = (): Result => {
    if (!weight || !height) {
      return {};
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let status = '';

    if (bmi < 18.5) {
      status = 'Underweight';
    } else if (bmi < 24.9) {
      status = 'Normal weight';
    } else if (bmi < 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obesity';
    }

    return { bmi, status };
  };
  return (
    <section className="bmi bg-[#262626]">
      <div className="relative lg:grid grid-cols-2">
        <div className="space-y-6 text-white z-20 relative max-w-screen-xl m-auto py-12 lg:py-20 px-8">
          <h1 className="font-bold text-4xl">
            Let's Calculate Your <span className="text-[#fbbf24]">BMI</span>
          </h1>
          <p>
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              color={"warning"}
              placeholder="Weight / kg"
              onChange={(e) => setWeight(parseInt(e.target.value))}
              isRequired
            />
            <Input
              type="text"
              color={"warning"}
              placeholder="Height / cm"
              onChange={(e) => setHeight(parseInt(e.target.value))}
              isRequired
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1>Your BMI is:</h1>
              <p className="text-[#fbbf24] min-h-[24px] transition-all duration-300">
                {result.bmi !== undefined ? result.bmi.toFixed(1) : "—"}
              </p>
            </div>
            <div>
              <h1>Your weight is:</h1>
              <p className="text-[#fbbf24] min-h-[24px] transition-all duration-300">
                {result.status || "—"}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setResult(getResult())}
              className="animated-button w-[140px] text-white uppercase mt-2 text-sm"
            >
              <span>CALCULATE</span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="relative h-full">
          <Image
            src="/featuredClassImg/cycling.jpg"
            alt="Cycling"
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
            quality={100}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default BMICalculator;
