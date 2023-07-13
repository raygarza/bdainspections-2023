import React from "react";
import Link from "next/link";

async function getArticles() {
  const res = await fetch(
    'https://bdainspections-2023.herokuapp.com/api/articles?populate=*',
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("failed to fetch Article data");
  }
  return res.json();
}

export default async function RecentArticles() {
  const articlesData = getArticles();
  const [articlesArray] = await Promise.all([articlesData]);
  const articles = articlesArray.data.reverse();


  return (
    <div>
      {/* Recent articles and other section */}
      <div className='bg-white'>
        {/* Recent articles */}
        <div className="mx-auto max-w-[100rem]  px-6 lg:px-16 font-semibold py-10">
          <h1 className="text-xl sm:text-2xl  font-bold tracking-tight text-gray-800 ">
            Recent Articles
          </h1>
          <div className="py-1 bg-[#434639] w-20 mt-2 mb-6"></div>

          <div className="grid grid-cols-3 gap-x-4 space-y-4 sm:space-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {articles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="col-span-3 h-fit sm:col-span-1 flex flex-col items-start justify-between ring-1 ring-gray-500/20 hover:ring-gray-500/40 hover:opacity-95 duration-200 bg-white rounded-lg sm:rounded-2xl"
                >
                  <Link href={`/blog/${article.attributes.slug}`}>

                    {/* card thumbnail */}
                    <div className="relative w-full">
                    <img
                        src={
                          article.attributes.thumbnail?.data.attributes.formats
                            .medium.url
                        }
                        alt="image"
                        className="aspect-[16/9] w-full rounded-t-lg sm:rounded-t-2xl bg-gray-100 object-cover "
                      />
                      <div className="absolute inset-0 rounded-2xl " />
                    </div>


                    <div className="max-w-xl px-4 py-4 space-y-1">
                      {/* Card category pill */}
                      <span className="inline-flex items-center rounded-full bg-gray-200 px-2 py-1 my-3 sm:mt-3 sm:mb-1 text-xs sm:text-[10px] font-normal text-gray-700">
                        {article.attributes.category?.data.attributes.name}
                      </span>

                      {/* card body */}
                      <div className="group relative mb-2">
                        <h3 className="text-lg line-clamp-1 sm:text-sm font-semibold leading-2 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {article.attributes.title}
                        </h3>
                        {(article.attributes.min_read !== null) |
                          (article.attributes.min_read !== "") && (
                          <p className="text-sm sm:text-[10px] text-gray-500">
                            {article.attributes.min_read} minute read
                          </p>
                        )}
                        <p className="mt-2 line-clamp-2 font-normal sm:text-xs sm:leading-2 text-gray-600">
                          {article.attributes.description}
                        </p>
                        <div className="text-blue-500 hover:text-blue-800 duration-200 text-xs my-2">
                          Read More {">"}
                        </div>
                      </div>

                      {/* Avatar and name block */}
                      <div className="group block flex-shrink-0 pb-1 pt-2">
                        <div className="flex items-center mr-3">
                          {/* <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={`${writerAvatar()}`}
                            alt="writer avatar"
                          />
                          
                        </div> */}
                          <div>
                            <p className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
                              By:{" "}
                              {article.attributes.author?.data.attributes.name}
                            </p>
                            <p className="text-[10px] font-medium text-gray-500 group-hover:text-gray-700">
                              {
                                article.attributes.author?.data.attributes.job_title
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-[100rem]  px-6 lg:px-16 pb-6 -mt-3 mx-auto">
          <Link href="/blog">
            <div className="mb-10 mt-4  w-fit shadow-md hover:opacity-95 hover:border-gray-500 rounded-xl font-semibold text-sm text-gray-700 px-6 py-4 bg-white  cursor-pointer border duration-200">
              View All Articles
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
