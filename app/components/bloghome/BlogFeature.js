async function getSingleArticle(slug) {
  const res = await fetch(
    `https://bdainspections-2023.herokuapp.com/api/articles?populate=*&filters[slug][$eq]=${slug}`,
  );
  if (!res.ok) {
    throw new Error("failed to fetch Article data");
  }
  return res.json();
}

export default async function BlogFeature() {

    const articleData = getSingleArticle("bda-inspections-unveiling-the-secrets-of-a-house");

    const [article] = await Promise.all([articleData]);

    console.log(article);
    return (
      <div className="">
            <div className=' absolute h-[36rem] sm:h-[20rem] 2xl:h-[16rem] w-full  top-[110px] sm:top-32 left-0 '>
              <div className='blog-header  w-full h-full' >
              </div>
          </div>
          <div className="mx-auto max-w-[100rem] ">
          <div className="flex justify-between isolate overflow-hidden bg-white px-6  py-10 shadow-xl sm:rounded-3xl sm:px-10  lg:flex lg:gap-x-1 lg:px-16">
           
            <div className="mx-auto max-w-md my-auto lg:mx-0 lg:flex-auto lg:text-left">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-2  mb-2 text-xs font-bold tracking-wide text-gray-500">
                Featured
            </span>
              <h2 className="text-2xl font-semibold tracking-normal text-gray-700">
                {article.data[0].attributes.title}
              </h2>
              <p className="mt-3 text-sm leading-2 line-clamp-2  text-gray-600">
                {article.data[0].attributes.description}
              </p>
              <div className="mt-5 flex items-center justify-center lg:justify-start">
                <a
                  href="/blog/bda-inspections-unveiling-the-secrets-of-a-house"
                  className="rounded-md hover:bg-[#6c705d] duration-200 shadow bg-[#5e6250] px-3.5 py-2.5 text-sm font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Read Article
                </a>
              </div>
            </div>
            <div className="relative my-auto">
                <img
                className=" w-full flex-none rounded-2xl object-cover shadow-xl aspect-5/4 h-48 lg:max-w-sm"
                src={article.data[0].attributes.thumbnail.data.attributes.url}
                alt="image"
                />
            </div>
          </div>
          
        </div>

        
        
      </div>
    )
  }