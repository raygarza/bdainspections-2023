import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function GreenReviews() {
  return (
    <section className=" bg-gradient-to-br from-[#434639] to-[#4d5142] py-24 sm:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-16 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-[#e8f2c6]">
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </div>
            <div className="font-bold text-sm mt-2 text-white">
              Positive:{" "}
              <span className="opacity-50 font-extralight pl-1">
                Professionalism, Responsiveness
              </span>
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “My inspector Chris, was very professional. Left no opinions
                  of his own but left no detail untouched. He explained each of
                  his findings and left great detail in his report. I am
                  confident in the overall experience and would definitely
                  recommend him/ this company to anyone in need of a detailed
                  inspection. Thank you so much for your time, patients, and
                  answers to all my questions.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://lh3.googleusercontent.com/a-/ACB-R5Txn7STXGXnM_VavoGuciISt7BT1TERm9P-OW-O"
                  alt="image"
                  quality={100}
                  width={60}
                  height={60}
                />
                <div className="text-base">
                  <div className="font-semibold text-white">
                    Magdalene Dugas
                  </div>
                  <div className="mt-0.5 text-white opacity-40">
                    Home Inspection
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-[#e8f2c6]">
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </div>
            <div className="font-bold text-sm mt-2 text-white">
              Positive:{" "}
              <span className="opacity-50 font-extralight pl-1">
                Professionalism, Quality, Responsiveness
              </span>
            </div>

            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Very thorough and professional service. Troy walked me
                  through all the important features of the structure and was
                  knowledgeable and adept at identifying hazards and
                  deficiencies. He was specific with his terminology and kept
                  things simple where I could understand. I highly recommend
                  this company.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="https://lh3.googleusercontent.com/a-/ACB-R5RivC-85Bzx_cEw4bV2dgUkq6L5e_p4qUxtPHDMIQ"
                  alt="image"
                  quality={100}
                  width={60}
                  height={60}
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Ty Royer</div>
                  <div className="mt-0.5 text-white opacity-40">
                    Home Inspection
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
