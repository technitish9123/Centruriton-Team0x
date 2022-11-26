import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Cards } from "components/dashboard";
import { ABI } from "constants/abi";
import { CONTRACT_ADDRESS } from "constants/contractAddress";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

type Props = {};

const Dashboard = (props: Props) => {
  const [contract, setContract] = useState<any>();
  const [notaries, setNotaries] = useState<any>([]);

  const { address, connector, isConnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();

  useEffect(() => {
    (async () => {
      try {
        let dataa;
        if (address)
          if (signer) {
            {
              dataa = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
              console.log(dataa);
              setContract(dataa);

              // const notaries: never[] = [];

              // console.log(userAssociatedNotaryIds);
              // for (let i = 0; i < userAssociatedNotaryIds.length; i++) {
              //   const id = userAssociatedNotaryIds[i].toString();
              //   console.log(id);
              //   const notary = await dataa?.notaries(id);
              //   const objNotary = {};

              //   objNotary.notaryid = id;

              //   objNotary.notary = notary;

              //   notaries.push(objNotary);
              // }
              // console.log("Notaries: " + JSON.stringify(notaries));
              // setNotaries(notaries);
            }
          }
      } catch (error) {
        console.log(error);
      }
      //   setContract(dataa);
    })();
  }, [address, signer]);

  const cn = async () => {
    try {
      console.log("first");
      const notary = await contract.getUserIds(address);
      console.log(notary);
      //   const notary = await contract.owner();
      //   console.log(notary);
      //   const userAssociatedNotaryIds = await contract.putNotaryOnChain();

      //   console.log(userAssociatedNotaryIds);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-raisin-black flex flex-col items-center h-full px-1 ">
      <div className=" w-full flex p-6 items-end justify-end ">
        <ConnectButton />
      </div>
      {/* {notaries.map(function (sub: any) {
          const id = sub.notaryid;
          sub = sub.notary;
          return (
            <div key={id}>
              hello
              <Cards
                notaryid={id}
                arb={sub[1]}
                party1={sub[2]}
                party2={sub[3]}
                ipfs={sub[0]}
                isSignParty1={sub[4]}
                isSignParty2={sub[5]}
                sigparty1={sub[6]}
                sigparty2={sub[7]}
                timeStampNotaryCreation={sub[8]}
                part1SignTimeStampNotaryCreation={sub[9]}
                part2SignTimeStampNotaryCreation={sub[10]}
                isExpired={sub[11]}
              />
            </div>
          );

        })} */}
      <h2 className="bg-clip-text text-transparent text-5xl bg-hash-red-gradient font-semibold  p-4  flex -mt-16 flex-col w-full">
        BlockSign
        <span className="text-sm ml-24 pt-2 ">
          the actual &quot;smart&quot; contract
        </span>
      </h2>

      <p className=" text-white text-3xl font-semibold  flex w-full text-center items-center content-center pl-[35vw] pt-8 ">
        {" "}
        Contract Management{" "}
        <span className="bg-clip-text text-transparent text-5xl bg-hash-red-gradient pl-1">
          {"  "}
          Dashboard
        </span>
        <br />
      </p>
      <p className="text-sm text-white -mt-4 text-center pb-12 ml-28">
        {" "}
        <br /> Manage All your contracts at one place.
      </p>

      <div className=" flex gap-40 flex-wrap items-center content-center justify-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <button onClick={cn}>hello</button>
    </div>
    //
    // </>
  );
};

export default Dashboard;
