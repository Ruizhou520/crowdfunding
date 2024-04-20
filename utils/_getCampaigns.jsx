import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  useContractRead,
  useContract,
  useContractWrite,
  Web3Button,
} from "@thirdweb-dev/react";

export const _getCampaigns = () => {
  const { contract } = useContract(
    "0x988e8336dfEF51Fec81c7A80e75441438a66E6bc"
  );
  const { data, isLoading, error } = useContractRead(contract, "getCampaigns");
  console.log(data);
  return <div>{data ? "empty" : "have item"}</div>;
};
