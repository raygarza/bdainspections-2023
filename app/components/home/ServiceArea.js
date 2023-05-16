import React from "react";
import Link from "next/link";

const areas = [
  {
    "id": "1",
    title: "Lake Charles",
  },
  {
    "id": "2",
    title: "Deridder",
  },
  {
    "id": "3",
    title: "Leesville",
  },
  {
    "id": "4",
    title: "Iowa",
  },
  {
    "id": "5",
    title: "Crowley",
  },
  {
    "id": "6",
    title: "Cameron",
  },
  {
    "id": "7",
    title: "Jennings",
  }
  
]


export default function ServiceArea() {

  return (
    <div>
      {/* Recent articles and other section */}
      <div>
        {/* Recent articles */}
        <div className="mx-auto max-w-[100rem]  px-6 lg:px-16 pb-10">
          <h1 className="text-xl sm:text-2xl  font-bold tracking-tight text-gray-800 ">
            Service Area
          </h1>
          <div className="py-1 bg-[#434639] w-20 mt-2 mb-6"></div>

          <p className="my-6 max-w-3xl text-lg leading-6 text-gray-600">
            We cover all of Southwest Louisiana -  If you have any question as to whether we cover your area, feel free to reach out.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-4 cursor-pointer">
            {areas.map((area) => {
              return (
                <div
                  key={area.id}
                  className="col-span-1 h-fit py-4  hover:opacity-95  duration-200 sm:col-span-1 flex flex-col items-start justify-between ring-1 ring-gray-500/20 hover:ring-gray-500/50  bg-white rounded-lg sm:rounded-2xl"
                >
                  
                    <div className="max-w-xl px-4 py-0">
                      {/* card body */}
                      <div className="group relative mb-2">
                        <h3 className="text-base line-clamp-1 sm:text-sm font-semibold leading-2 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {area.title}
                        </h3>
                      </div>

                    </div>
                
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
