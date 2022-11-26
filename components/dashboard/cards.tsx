import React from "react";

type Props = {};

const Cards = (
  {
    // notaryid,
    // arb,
    // party1,
    // party2,
    // ipfs,
    // isSignParty1,
    // isSignParty2,
    // sigparty1,
    // sigparty2,
    // timeStampNotaryCreation,
    // part1SignTimeStampNotaryCreation,
    // part2SignTimeStampNotaryCreation,
    // isExpired,
  }
) => {
  return (
    <div className="flex rounded-lg bg-hash-red-gradient w-104 h-64 text-raisin-black ">
      <div className="grid grid-cols-2  justify-around content-center gap-x-44 items-center  px-6">
        <p className="col-span-2 "> Arbitator:</p>
        <div>
          <p className="font-bold text-lg  text-center py-2">party1</p>
          <p>address:</p>
          <p> created at: </p>
          <p>TimeStamp:</p>
          <button className="rounded-md bg-slate-500 w-24 items-center text-center ">
            unsigned
          </button>
        </div>
        <div className="">
          <p className="font-bold text-lg text-center py-2">party2</p>
          <p>address:</p>
          <p> created at: </p>
          <p>TimeStamp:</p>
          <button className="rounded-md bg-slate-500 w-24 items-center text-center ">
            signed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
