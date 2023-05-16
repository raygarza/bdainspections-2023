import React from "react";
import Link from "next/link";

const services = [
  {
    "id": "1",
    title: "Residential Inspections",
    description: "We provide a thorough inspection of the home and provide a detailed report of our findings.",
    slug: "home-inspection",
  },
  {
    "id": "2",
    title: "Commercial Inspections",
    description: "We provide a thorough inspection of the home and provide a detailed report of our findings.",
    slug: "commercial-inspection",
  },
  {
    "id": "3",
    title: "Pre-Listing Inspections",
    description: "We provide a thorough inspection of the home and provide a detailed report of our findings.",
    href: "pre-listing-inspection",
  }
]

export default async function RecentArticles() {

  return (
    <div>
      {/* Recent articles and other section */}
      <div>
        {/* Recent articles */}
        <div className="mx-auto max-w-[100rem]  px-6 lg:px-16 pt-16 pb-10">
          <h1 className="text-xl sm:text-2xl  font-bold tracking-tight text-gray-800 ">
            Our Services
          </h1>
          <div className="py-1 bg-[#434639] w-20 mt-2 mb-6"></div>

          <p className="my-6 max-w-3xl text-lg leading-6 text-gray-600">
          We're open 7 days a week, and every inspection that we perform comes with multiple FREE warranties! <br/><br/>Transparent pricing, text-confirmation of appointments,a reports emailed within 1 business day are just a few tings that set us apart.
          </p>

          <div className="grid grid-cols-3 gap-x-4 my-6 space-y-4 sm:space-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-3 cursor-pointer">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="col-span-3 h-fit py-4  hover:opacity-95  duration-200 sm:col-span-1 flex flex-col items-start justify-between ring-1 ring-gray-500/20 hover:ring-gray-500/50  bg-white rounded-lg sm:rounded-2xl"
                >
                  <Link href={`/blog/${service.slug}`}>
                    <div className="max-w-xl px-4 py-4 space-y-1">
                      {/* card body */}
                      <div className="group relative mb-2">
                        <h3 className="text-lg line-clamp-1 sm:text-sm font-semibold leading-2 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {service.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 font-normal sm:text-xs sm:leading-2 text-gray-600">
                          {service.description}
                        </p>
                        <div className="text-blue-500 hover:text-blue-800 duration-200 text-xs my-2">
                          Read More {">"}
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
