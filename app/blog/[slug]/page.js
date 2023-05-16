import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function getSingleArticle(slug) {
  const res = await fetch(
    `https://bdainspections-2023.herokuapp.com/api/articles?populate=*&filters[slug][$eq]=${slug}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch Article data");
  }
  return res.json();
}

async function getArticles(slug) {
  const res = await fetch(
    `https://bdainspections-2023.herokuapp.com/api/articles?populate=*&filters[slug][$ne]=${slug}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch Article data");
  }
  return res.json();
}

export default async function SingleArticle({ params }) {
  const slug = params.slug;
  const singleArticleData = getSingleArticle(slug);
  const articlesData = getArticles(slug);
  const [singleArticle, articlesArray] = await Promise.all([
    singleArticleData,
    articlesData,
  ]);

  const articles = articlesArray.data.slice(0, 3);
  // console.log(singleArticle.data[0])

  const pages = [
    { name: "Blog", href: "/blog", current: false },
    // { name: singleArticle.data[0].attributes.title, href: '#', current: true },
  ];

  return (
    <div className="m-auto divide-y bg-white">
      {/* Single Article Section */}
      <div className="pb-10 ">
        {/* Breadcrumbs */}
        <div className="bg-[#f4f4f4]">
          <nav
            className="flex bg-[#f4f4f4] pb-3 pt-6 sm:-mb-4  sm:py-3 sm:pb-0 max-w-4xl 2xl:max-w-7xl px-6 mx-auto"
            aria-label="Breadcrumb"
          >
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <a href="/" className="text-gray-400 hover:text-gray-800">
                    <HomeIcon
                      className="sm:h-5 sm:w-5 h-7 w-7 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <svg
                      className="sm:h-5 sm:w-5 h-7 w-7 flex-shrink-0 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <a
                      href={page.href}
                      className="ml-2 text-base sm:text-sm font-medium text-gray-400 hover:text-gray-700"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        {/* Article Header */}
        <div className="bg-[#f4f4f4] border-b-2">
          <div className=" max-w-4xl 2xl:max-w-7xl px-6 mx-auto  grid grid-cols-8 sm:gap-4 bg-[#f4f4f4]">
            {/* Article Header --- Left */}
            <div className="col-span-8 sm:col-span-4 my-auto sm:pt-3 pt-4">
              {/* Card category pill */}
              {/* <span className="inline-flex items-center rounded-full bg-[#6a6f5b]/10 px-3 py-2 sm:mb-1 text-sm sm:text-xs font-semibold text-gray-500">
             {singleArticle.data[0].attributes.category?.data.attributes.name}
            </span> */}
              {/* Article Title */}
              <div className="text-3xl sm:text-2xl font-extrabold sm:font-bold text-gray-700">
                {singleArticle.data[0].attributes.title}
              </div>
              {(singleArticle.data[0].attributes.min_read !== null) |
                (singleArticle.data[0].attributes.min_read !== "") && (
                <p className="text-sm sm:text-sm font-semibold text-gray-400">
                  {singleArticle.data[0].attributes.min_read} minute read
                </p>
              )}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  By:{" "}
                  {
                    singleArticle.data[0].attributes.author?.data.attributes
                      .name
                  }
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  {
                    singleArticle.data[0].attributes.author?.data.attributes
                      .job_title
                  }
                </p>
              </div>

              <div className="block sm:hidden mx-auto py-6 ">
                {singleArticle.data[0].attributes.description}
              </div>
            </div>
            {/* Article Header --- Right */}
            <div className="col-span-8 sm:col-span-4 ">
              <div className="relative sm:mt-10  w-full sm:w-[90%] pb-10">
                <img
                  src={singleArticle.data[0].attributes.thumbnail.data.attributes.url}
                  alt="image"
                  className="aspect-[16/9] w-full rounded-lg sm:rounded-t-2xl bg-gray-100 object-cover "
                />
                <div className="absolute inset-0 rounded-2xl " />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block max-w-4xl 2xl:max-w-7xl px-6 mx-auto pb-6  pt-10 ">
          {singleArticle.data[0].attributes.description}
        </div>
        {/* <div className='max-w-4xl 2xl:max-w-7xl px-6 mx-auto h-1 bg-[#6a6f5b]'></div> */}

        {/* Main blog content */}
        <div>
          <div
            className="max-w-4xl pt-4 2xl:max-w-7xl px-6 mx-auto [&>p]:pt-2 leading-relaxed [&>h1]:text-3xl [&>h1]:pt-6  [&>h2]:text-2xl [&>h2]:pt-6 [&>h3]:text-xl [&>h3]:pt-6 [&>h4]:text-lg [&>h4]:pt-6 [&>h5]:text-base [&>h5]:pt-6 [&>p]:lg:text-sm "
            dangerouslySetInnerHTML={{
              __html: singleArticle.data[0].attributes.article_body,
            }}
          />
        </div>
      </div>

      {/* Recent articles and other section */}
      <div>
        {/* Recent articles */}
        <div className="max-w-4xl 2xl:max-w-7xl px-6 mx-auto font-semibold py-10">
          <h1 className="text-xl pb-4">Recent Articles</h1>
          <div className="grid grid-cols-3 gap-x-4 space-y-4 sm:space-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {articles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="col-span-3 h-fit sm:col-span-1 flex flex-col items-start justify-between ring-1 ring-gray-500/20 hover:opacity-90 bg-white rounded-lg sm:rounded-2xl"
                >
                  <Link href={`/blog/${article.attributes.slug}`}>
                    {/* card thumbnail */}
                    <div className="relative w-full hidden sm:block">
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
                        <p className="mt-2 line-clamp-2 sm:text-xs sm:leading-2 text-gray-600">
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
                                article.attributes.author?.data.attributes
                                  .job_title
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
        <div className="max-w-4xl 2xl:max-w-7xl px-6 pb-6 -mt-3 mx-auto">
          <Link href="/blog">
            <div className="px-3 py-3 text-sm w-fit border bg-[#f1f1f1] rounded-lg hover:bg-[#e9e9e9] text-center">
              Back to Blog
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
