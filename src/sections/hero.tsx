"use client";

import InViewCome from "@/components/InViewCome";
import Link from "next/link";

export default function Hero({ data }: { data: any }) {
  const heroData = data?.["Hero Section"];

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              {heroData?.["Hero Title"]
                ?.split(" ")
                ?.map((w: string, i: number) => (
                  <InViewCome delay={i * 0.1} key={i}>
                    {w + " "}
                  </InViewCome>
                ))}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                {heroData?.hero_description
                  ?.split(" ")
                  ?.map((w: string, i: number) => (
                    <InViewCome delay={i * 0.1} key={i}>
                      {w + " "}
                    </InViewCome>
                  ))}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contacto"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {heroData?.hero_cta_button_text}
                </Link>
                <Link
                  href="/nosotros"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {heroData?.hero_learn_more_text}
                </Link>
              </div>
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
