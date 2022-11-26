import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-[100vh]  ">
      <header className="bg-raisin-black min-w-26 flex py-6 justify-between  px-3">
        <p className="text-5xl text-white font-semibold">
          Block
          <span className="bg-clip-text text-transparent  bg-hash-red-gradient ">
            Sign
          </span>
        </p>
        <Link href="/app">
          <button className="py-2 px-4 bg-hash-red text-white text-lg">
            Launch App
          </button>
        </Link>
      </header>
      <div className="flex flex-col justify-center items-center text-center content-center pt-14">
        <p className="bg-clip-text text-transparent  bg-hash-red-gradient text-5xl pt-4  font-semibold ">
          BlockSign
          <p className="text-center pt-3 text- ">
            Next Generation <span className="text-med-black">Notrization</span>{" "}
            Software
          </p>
        </p>
        <p className="text-med-black text-2xl font-medium pt-3">
          The real <span className="text-hash-red"> smart</span> contract
        </p>
      </div>
      <div className="flex justify-center gap-x-20 mt-20">
        <div className="bg-raisin-black relative w-72 h-72 text-white flex flex-col items-center justify-center">
          <Image
            src="/svg/gradient.svg"
            height={250}
            width={250}
            alt="hello"
            className=" absolute top-0 left-0"
          />
          <Image
            src="/svg/1.svg"
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="text-xl  pt-12">Immutability</p>
        </div>

        <div className="bg-raisin-black relative w-72 h-72 text-white flex flex-col items-center justify-center">
          <Image
            src="/svg/gradient.svg"
            height={250}
            width={250}
            alt="hello"
            className=" absolute top-0 left-0"
          />
          <Image
            src="/svg/11.svg"
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="text-xl  pt-12">Transparacy</p>
        </div>
        <div className="bg-raisin-black relative w-72 h-72 text-white flex flex-col items-center justify-center">
          <Image
            src="/svg/gradient.svg"
            height={250}
            width={250}
            alt="hello"
            className=" absolute top-0 left-0"
          />
          <Image
            src="/svg/111.svg"
            height={130}
            width={110}
            alt="hello"
            className="z-100 flex "
          />
          <p className="text-xl  pt-12">Reliability</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col pt-20 text-med-black">
        <p className="text-3xl font-semibold ">
          sign contracts <br /> with verified user with full transparancy <br />
        </p>
        <p className="text-base font-medium pt-1">
          get an authorized notary for your contracts
        </p>
      </div>
      <div className="flex justify-center items-center pt-32 pb-20 relative">
        <Image
          src="/svg/gradient.svg"
          height={250}
          width={250}
          alt="hello"
          className=" absolute top-12 left-80"
        />
        <Image
          src="/22.png"
          height={590}
          width={590}
          alt="hello"
          className="  absolute "
        />
        <Image
          src="/svg/2.svg"
          height={750}
          width={750}
          alt="hello"
          className="   "
        />
      </div>
      <div className="bg-raisin-black flex w-full h-4/6 items-center justify-evenly px-4">
        <Image
          src="/33.png"
          height={550}
          width={550}
          alt="hello"
          className="  "
        />

        <p className="text-4xl text-white font-semibold pl-32">
          {" "}
          Advanced <span className="text-hash-red">DEED</span> and{" "}
          <span className="text-hash-red"> Agreement </span>
          <br />
          Management Dashboard
          <br />{" "}
          <span className="text-base">
            select custom visuals to send to your users from a wide arrayof HTML
            templates
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center pt-36 items-centercontent-center px-16">
        <div className="text-3xl font-medium px-4 text-med-black">
          automate contract renewal{" "}
          <span className="text-hash-red">and transfer</span>
          <p className="text-xl pt-5">
            the deployed smart contract will allow you to securely keep track of
            the expiry dates
          </p>
        </div>
        <div className=" flex items-center content-center justify-center">
          <Image
            src="/33.png"
            height={450}
            width={550}
            alt="hello"
            className="  "
          />
        </div>
        <div className="pl-28">
          <Image
            src="/svg/4.svg"
            height={150}
            width={150}
            alt="hello"
            className="  "
          />
        </div>
      </div>
      <div className="flex flex-col items-start pl-28 w-full pt-32">
        <p className="bg-clip-text text-transparent font-medium text-lg pb-1  bg-hash-red-gradient ">
          Worried About Signing Agreement?
        </p>
        <p className="text-med-black text-4xl">
          use BlockSign to easily sign <br />
          your contract
        </p>
        <div className="flex flex-wrap  justify-between w-full  pr-40 py-20 ">
          <div className="w-72">
            <Image
              src="/svg/5.svg"
              height={50}
              width={50}
              alt="hello"
              className="  "
            />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">Trust</h4>
              Since all the data are stored onChain. So there is not a chance of
              trust issue.
            </p>
          </div>
          <div className="w-72 ">
            <Image
              src="/svg/55.svg"
              height={50}
              width={50}
              alt="hello"
              className="  "
            />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">User-Experience</h4>
              Easily Sign Your Contract From your Comfort Zone with Easy To use
              User Interface.
            </p>
          </div>
          <div className="w-72">
            <Image
              src="/svg/555.svg"
              height={50}
              width={50}
              alt="hello"
              className="  "
            />
            <p className="text-manatee">
              <h4 className="text-med-black  font-semibold">
                helpful Dashboard
              </h4>
              Keep Track of all of your contract on a single click
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-28 pt-8 relative">
        <Image
          src="/svg/7.svg"
          height={150}
          width={950}
          alt="hello"
          className="  "
        />
        <Link href="/app">
          <button className="py-4 px-6 bg-hash-red text-white text-xl absolute bottom-40 right-96">
            Launch App
          </button>
        </Link>
      </div>
      <footer className="text-med-black font-medium flex w-full justify-center pb-4 text-xl">
        Made With ❤️ by <span className="text-hash-red"> Team0X </span>
      </footer>
    </div>
  );
}
