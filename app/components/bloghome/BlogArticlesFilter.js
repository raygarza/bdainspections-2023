
import Link from "next/link";
import { API_URL } from "@/config";

// const notificationMethods = [
//     { id: 'all', title: 'All' },
//     { id: 'housing_market', title: 'Housing Market' },
//     { id: 'push', title: 'Push notification' },
//   ]
  
//   const posts = [
//     {
//       id: 1,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 2,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 3,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 4,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 5,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 6,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 7,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       id: 8,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Chris McNamee',
//         role: 'Owner',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     // More posts...
//   ]


export default async function BlogArticlesFilter(){
  

   const res = await fetch(`${API_URL}api/articles?populate=*`);
   const articles = await res.json();

   const data = await fetch(`${API_URL}api/writers?populate=*`);
   const writers = await data.json();
   const writerArray = writers.data
  
   const cats = await fetch(`${API_URL}api/categories`);
   const categories = await cats.json();

 

  return(
    <div className='grid grid-cols-8 m-auto sm:py-10 sm:space-x-6'>
      <div className='col-span-8 lg:col-span-2'>
          <div className=" hidden lg:block bg-white rounded-lg sm:rounded-xl divide-y-2 shadow-lg space-y-2 p-6 sticky top-10">
          
              <div className="text-2xl font-bold text-gray-900 ">Filter By</div>
              <div className='pt-4'>
                <div className='font-bold pb-2.5'>Topic</div>
                <fieldset  className=''>
                  <legend className="sr-only">Category</legend>
                  <div className="space-y-2">

                    <div className="flex items-center">
                      <input
                        id={1000}
                        type="radio"
                        defaultChecked
                        name="category"
                        className="h-4 w-4 border-gray-300 text-[#6c705d] focus:ring-[#6c705d00]"
                      />
                      <label  className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        All
                      </label>
                    </div>
                    {categories.data.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          id={category.id}
                          name="category"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-[#6c705d] focus:ring-[#6c705d00]"
                        />
                        <label htmlFor={category.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        {category.attributes.name}
                        </label>
                      
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              
          
          </div>
      </div>
      <div className='col-span-8 lg:col-span-6'>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className='pb-6 '>
           
            <h1 className='text-2xl lg:text-2xl pb-1 font-bold lg:font-extrabold'>Latest Articles</h1>
            <p className='w-12 border-t-[6px]  border-[#6c705d]'></p>

            <div className='mt-4 lg:hidden'>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#494f37] sm:text-sm sm:leading-6"
                  defaultValue="All"
                >
                  <option defaultChecked>All</option>
                  {categories.data.map((category) => (
                      <option key={category.id}>{category.attributes.name}</option>
                    ))}
                </select>
              </div>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {articles.data.map((article) => {  
              function writerAvatar(){  
                for(const x in writerArray) {
                  if (writerArray[x].attributes.name === article.attributes.author.data.attributes.name){
                    return({API_URL} + writerArray[x].attributes.picture.data.attributes.url)
                  } 
                  console.log('writerArray[x].attributes.name: ', writerArray[x].attributes.name)
                  console.log('article.attributes.author.data.attributes.name: ', article.attributes.author.data.attributes.name)

                 }
                }
              
            //  console.log('Min read: ', article.attributes.min_read)
            
             return (
              <article key={article.id} className="flex flex-col items-start justify-between ring-1 ring-gray-500/20 bg-white rounded-lg sm:rounded-2xl">
                <div className="relative w-full">
                  <img
                    src={{API_URL} + article.attributes.image.data.attributes.formats.thumbnail.url}
                    alt="image"
                    className="aspect-[16/9] w-full rounded-t-lg sm:rounded-t-2xl bg-gray-100 object-cover "
                  />
                  <div className="absolute inset-0 rounded-2xl " />
                </div>
                <div className="max-w-xl px-4 pb-4 space-y-2">
                  <span className="inline-flex items-center rounded-full bg-gray-300/30 px-2 py-1 my-3 sm:mt-3 sm:mb-1 text-xs sm:text-[10px] font-normal text-gray-700">
                  {article.attributes.category.data.attributes.name}
                  </span>
                  <div className="group relative my-2">
                    <h3 className="text-lg line-clamp-1 sm:text-sm font-semibold leading-2 text-gray-900 group-hover:text-gray-600">
                      <Link href={'/blog/' + article.attributes.slug}>
                        <span className="absolute inset-0" />
                        {article.attributes.title}
                      </Link>
                    </h3>
                    <p className='text-sm sm:text-[10px] text-gray-500'>{article.attributes.min_read}</p>
                    <p className="mt-2 line-clamp-2 sm:text-xs sm:leading-2 text-gray-600">{article.attributes.description}</p>
                    <div className='text-blue-500 hover:text-blue-800 duration-200 text-xs my-2'>Read More {'>'}</div>
                  </div>
                  
                  <div className="group block flex-shrink-0 pb-1 pt-2">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={writerAvatar()}
                          alt="writer avatar"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-xs font-medium text-gray-700 group-hover:text-gray-900">{article.attributes.author.data.attributes.name}</p>
                        <p className="text-[10px] font-medium text-gray-500 group-hover:text-gray-700">{article.attributes.author.data.attributes.job_title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ) 

            })}
          </div>
        </div>
      </div>


      </div>
  )
}