

const testimonials = [
  {
    id: 1,
    body: 'My inspector Chris, was very professional. Left no opinions of his own but left no detail untouched. He explained each of his findings and left great detail in his report. I am confident in the overall experience and would definitely recommend him/ this company to anyone in need of a detailed inspection. Thank you so much for your time, patients, and answers to all my questions.',
    author: {
      name: 'Magdalene Dugas',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a-/ACB-R5Txn7STXGXnM_VavoGuciISt7BT1TERm9P-OW-O=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 2,
    body: 'Very thorough and professional service. Troy walked me through all the important features of the structure and was knowledgeable and adept at identifying hazards and deficiencies. He was specific with his terminology and kept things simple where I could understand. I highly recommend this company.',
    author: {
      name: 'Ty Royer',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a-/ACB-R5RivC-85Bzx_cEw4bV2dgUkq6L5e_p4qUxtPHDMIQ=w90-h90-p-rp-mo-ba4-br100'    },
  },
  {
    id: 3,
    body: 'I have had the opportunity to work with Jase for several of my clients. In All occasions He has been thorough, professional and easy to understand what aspects of the inspection were of greatest concern. I am Always happy to see that he will be the inspector we will be meeting with!',
    author: {
      name: 'Jacinda Vincent',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a/AGNmyxY9fZphktBSUxo2rDyrr1zk48rDgf5W02yzl65X=w90-h90-p-rp-mo-br100'    },
  },
  {
    id: 4,
    body: 'This company was super easy to schedule with, friendly, offer first time home buyer discount and the inspector was super thorough with everything, very talkative, and definitely let’s you know anything concerning, there were tons of things we did not spot that when he pointed out we were like, “how did we not see this?.” But we are thankful they came out to help us. Highly recommend BDA Inspections! 👍🏻',
    author: {
      name: 'Russell Guidry',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a-/ACB-R5SIbL8cBog4sGSWIZvqGxTqX8DnR3qDyW-vAfMpmg=w90-h90-p-rp-mo-ba2-br100',
    },
  },
  {
    id: 5,
    body: 'Jase was so professional and thorough. As a first time buyer, I am unaware of the ins and outs of builds. He took the time to explain everything to me in a way that helped me understand. I would absolutely recommend BDA to anyone needing an inspector.',
    author: {
      name: 'Kellie Langley',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a-/ACB-R5Tz1WdBNf_WRa8K-EewBBhuLeJi1ynhR8IioL4CEhA=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 6,
    body: 'BDA was recommended by our realtor. They accepted a last minute inspection request. Jace was our inspector, and he was spectacular. He went into detail about everything he discovered. As he pointed out things, he included the importance of them and made sure we understood everything. He was able to answer all of our questions, even the ones that weren’t covered by the inspection. He also had a great sense of humor and was easy going, which is always a plus. I would definitely recommend BDA, especially Jace, to anyone needing an inspection!',
    author: {
      name: 'Sarah',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a/AGNmyxYqcz3jyVnC-_Zi8grOIjxL36M_ElMUviT_Mb6t=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 7,
    body: 'Jace did a very thorough job.  He was very informative and took a picture as well as documented every little detail he saw that needed to be addressed.  I would 100% recommended him for any inspection.  It helps give peace of mind before buying our new home.  Thanks!',
    author: {
      name: 'Bradley Yellot',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a/AGNmyxZN4WJWei_a8kuLYNQtEHFmCOQ-qoUU0dZJuYuF=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 8,
    body: 'This is a very professional and thorough company! I highly recommend you use them as they will go over every inch of your house and ensure EVERYTHING is working as it should.',
    author: {
      name: 'Sircharles*',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a/AGNmyxZB5BrYe34WAUnFKZdC3ih2TeCT2fjYhfa3gqtP=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 9,
    body: 'The inspector who assisted us in our peace of mind needs was Chris. He went through with a fine tooth comb to ensure my husband and I knew what we were up against by giving us a walkthrough of the entire home. His assistance allows us the benefit of moving forward with a strategic plan for potential future repairs. Thanks again BDA inspections!',
    author: {
      name: 'Mrs McPherson',
      service: 'Home Inspection',
      imageUrl:
        'https://lh3.googleusercontent.com/a-/ACB-R5QHsR91koS7Lsvn6VEGUJQekS6oDVhHI8aFO6mb_A=w90-h90-p-rp-mo-br100',
    },
  },
  {
    id: 10,
    body: 'bodytext',
    author: {
      name: 'LeslieAlexander',
      service: 'Home Inspection',
      imageUrl:
        'imageurl',
    },
  },
  // More testimonials...
]

export default function Reviews() {
  return (
    <div className=" py-24 sm:py-10">
      <div className="max-w-[100rem] px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#653033]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with hundreds of amazing clients.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.service} className="pt-8  sm:inline-block hover:opacity-95 hover:scale-[1.01] duration-200 sm:w-full sm:px-4">
                <figure className="rounded-2xl p-8 text-sm bg-white shadow-lg border leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.service}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className='my-10 sm:text-center w-fit m-auto shadow-lg hover:opacity-95 hover:px-[2.15rem] rounded-xl font-semibold text-gray-700 px-8 py-6 bg-white  cursor-pointer border duration-200'>
            <a href="https://www.google.com/search?q=bda+inspections+lake+charles&rlz=1C1ONGR_enUS1056US1056&oq=bda+inspections+lake+charles&aqs=chrome.0.0i512j0i390i395l3j69i60l3.10546j1j7&sourceid=chrome&ie=UTF-8#lrd=0x863b85cdf6ce6fcb:0xe33c02a68fb90b54,1,,,," target="_blank">See more Reviews on Google</a>
        </div>
      </div>
    </div>
  )
}