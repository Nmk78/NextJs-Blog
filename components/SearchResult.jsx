import React from 'react'
import {
      faClose,
      faCross,
      faMagnifyingGlass,
    } from "@fortawesome/free-solid-svg-icons";
    import Link from "next/link";
    import Image from "next/image";

const SearchResult = ({ id, title, content, author, date, mode }) => {
  return (
           <Link href={`/posts/123`}>
    {" "}
    <div
      id="123"
      className="w-76 h-20 mx-3 bg-sky-600 dark:bg-sky-600 my-1 flex flex-row items-center justify-between rounded-xl"
    >
      <Image
        src="/images/sample4.jpg"
        alt="logo"
        width={65}
        height={65}
        className=" object-contain object-center rounded-2xl m-2"
      />{" "}
      <div
        id="Left"
        className=" w-full h-full px-3 py-2 flex flex-col justify-around"
      >
        <div className="font-semibold text-gray-200 text-md text-lg font-latin break-words flex flex-nowrap whitespace-normal overflow-hidden">
          How to use Voewls in Sentences?
        </div>

        <div className="w-full h-10 flex flex-row items-center justify-start">
          <Image
            src="/images/sample4.jpg"
            alt="profile-image"
            width={30}
            height={30}
            className=" object-contain object-center rounded-full"
          />
          <div
            id="name"
            className="text-md font-latin font-md text-gray-200 ml-3"
          >
            Wai Yan Thein
          </div>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default SearchResult