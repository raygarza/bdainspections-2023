"use client";

import { useState } from "react";

import Link from "next/link";
// import NavbarPill from './NavbarPill';
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/img/brand/bda-logolight.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarMain() {
  const [open, setOpen] = useState(false);

  const navOpen = () => {
    setOpen(true);
  };
  const navClose = () => {
    setOpen(false);
  };

  function smoothscroll(scrollvalue) {
    const yOffset = -80;
    const element = document.getElementById(`${scrollvalue}`);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    // this will get me to id, but need a y offset because i scrols too far.
    // document.getElementById(`${scrollvalue}`).scrollIntoView();
  }

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-[100rem] px-4 py-2 sm:px-6 lg:px-8 ">
        <div className="flex h-12 sm:h-16 justify-between">
          {/* left side of nav */}
          <div className="flex">
            {/* logo - desktop and mobile version */}

            <div className="flex space-x-4 items-center">
              <Link href="/">
                <div className="flex space-x-2 items-center">
                  <Image src={logo} width={80} />
                  <div>|</div>

                  <div className="my-auto font-semibold text-lg sm:text-xl">
                    Lake Charles
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* right side of nav */}
          {/* Nav Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-6 items-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
            >
              Blog
            </Link>

            <a
              onClick={() => smoothscroll("cities")}
              href="#cities"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
            >
              About
            </a>

            <a
              onClick={() => smoothscroll("customerservice")}
              href="#customerservice"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
            >
              Team
            </a>

            <a
              onClick={() => smoothscroll("services")}
              href="#services"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
            >
              Services
            </a>

            <a
              href="tel:3374995872"
              className="inline-flex items-center   text-sm font-medium border-[#653033] border duration-300 p-3  rounded-lg h-fit text-[#653033]"
            >
              <span>Schedule An Inspection</span>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900 duration-300"
              onClick={navOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                  Logo Here
                                </Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-500 "
                                    onClick={() => setOpen(false)}
                                  >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                              <ul className=" font-semibold text-xl">
                                <Link
                                  href="/blog"
                                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
                                >
                                  Blog
                                </Link>

                                <a
                                  href="#cities"
                                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
                                >
                                  About
                                </a>

                                <a
                                  href="#customerservice"
                                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
                                >
                                  Team
                                </a>

                                <a
                                  href="#services"
                                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-[#653033] "
                                >
                                  Services
                                </a>

                                <a
                                  href="tel:3374995872"
                                  className="inline-flex items-center   text-sm font-medium border-[#653033] border duration-300 p-3  rounded-lg h-fit text-[#653033]"
                                >
                                  <span>Schedule An Inspection</span>
                                </a>
                              </ul>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
      </div>
    </nav>
  );
}
