import { Text, Button, Img } from "./..";
import React from "react";

export default function TransactionDetails({
  transactionDescription = "Deposit from my Card",
  transactionDate = "28 January 2021",
  transactionAmount = "-$850",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center gap-4 flex-1`}>
      <Button className="flex h-[54px] W-[54px] items-center justify-center rounded-[26px] bg-orange-50 px-3"> 
        <Img src="images/img_iconfinder_busi.svg" />
      </Button>
      <div className="flex flex-1 items-start justify-center gap-3">  
        <div className="flex flex-1 flex-col items-start gap-0.5 self-center">
          <Text size="textxl" as="p" className="text-[16px] font-medium text-gray-900">
            {transactionDescription}
          </Text>
          <Text size="textlg" as="p" className="text-[15px] font-normal text-indigo-300">
            {transactionDate}
          </Text>
        </div>
        <Text size="textxl" as="p" className="mt-2.5 text-[16px] font-medium text-red-a200">
          {transactionAmount}
        </Text>
      </div>
    </div>
  );
}
