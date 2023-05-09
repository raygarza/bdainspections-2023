import { API_URL } from '@/config'
import Image from 'next/image'
import chrisheadshot from '../../../public/img/headshots/chris.svg'
import davidheadshot from '../../../public/img/headshots/david.svg'
import delmaheadshot from '../../../public/img/headshots/delma.svg'
import jaseheadshot from '../../../public/img/headshots/jase.svg'



const people = [
  {
    name: 'Chris McNamee',
    role: 'Owner / Operator',
    imageUrl:chrisheadshot,
    trec:'22293',
    lhi: '11020'

  },
  {
    name: 'David Marcantel',
    role: 'Licensed Inspector',
    imageUrl:davidheadshot,
    trec:'',
    lhi: '11038'

  },
  {
    name: 'Delma Troy Clark',
    role: 'Licensed Inspector',
    imageUrl:delmaheadshot,
    trec:'',
    lhi: '11706'

  },
  {
    name: 'Jase Ellis',
    role: 'Licensed Inspector',
    imageUrl:jaseheadshot,
    trec:'',
    lhi: '11183'

  },
  // More people...
]


export default async function CustomerService() {
  const data = await fetch(`${API_URL}api/writers?populate=*`);
  const writers = await data.json();

  return (
    <div className="bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
        
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-800 ">Customer Service is Our Priority</h2>
          <div className='py-1 bg-[#434639] w-20 mt-2 '></div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Each of our team members is a Licensed Home Inspector, and passes the litmus test of professionalism, attention to detail, and all-around customer service that our company strives to deliver to each and every customer.
          </p>
         
          
        </div>
        
        <ul
          
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {writers.data.map((person) => (
 
            <li key={person.id} >
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src={API_URL + person.attributes.picture.data.attributes.url} alt='image' width='50' height='34' />
              <div className='space-x-2 my-2 absolute -mt-[2.5rem] ml-2 '>
                  {person.attributes.trec_number !== null ?   (<span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-xs bg-opacity-80 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">TREC# {person.attributes.trec_number}</span>) : ''}
             
              {person.attributes.lhi_number !== null ?  <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-xs bg-opacity-80 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">LHI# {person.attributes.lhi_number}</span> : ''}

             </div>
              <h3 className="mt-2 sm:mt-4 text-lg font-semibold leading-8 text-gray-900">{person.attributes.name}</h3>
              <p className="text-sm leading-2 text-gray-600">{person.attributes.job_title}</p>
              {/* {person.bio !== '' ? <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p> : ''} */}

            </li>

          ))}
        </ul>

      </div>
    </div>
  )
}