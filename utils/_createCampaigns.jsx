import React from "react";

import { ConnectWallet } from "@thirdweb-dev/react";
import {
  useContractRead,
  useContract,
  useContractWrite,
  Web3Button,
} from "@thirdweb-dev/react";

export const _createCampaigns = () => {
  const { contract } = useContract(
    "0x988e8336dfEF51Fec81c7A80e75441438a66E6bc"
  );
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "createCampaign"
  );
  const _owner = "0x69846945C435d71d761FaBCbd939d2c730c7E057";
  const _title = "test";
  const _description = "This is the test of create contract";
  const _target = 100;
  const _deadline = new Date("2025-01-20").getTime() / 1000;
  const _image =
    "data:image/jpeg;base64,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";

  //   const publishCampaign = async () => {
  //     try {
  //       const data = await createCampaign([
  //         _owner,
  //         _title,
  //         _description,
  //         _target,
  //         _deadline,
  //         _image,
  //       ]);

  //       console.log("contract call success", data);
  //     } catch (e) {
  //       console.log("contract call fail", e);
  //     }
  //   };

  return (
    <Web3Button
      contractAddress="0x988e8336dfEF51Fec81c7A80e75441438a66E6bc"
      action={() =>
        mutateAsync({
          args: [_owner, _title, _description, _target, _deadline, _image],
        })
      }
    >
      CreateCampaigns
    </Web3Button>
  );
};
