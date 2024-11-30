import { Img, Text } from "./.."; 
import React from "react";

export default function UserCard({
  balanceText = "Balance",
  balanceAmount = "$5,756",
  cardHolderLabel = "CARD HOLDER",
  cardHolderName = "Eddy Cusuma",
  validThruLabel = "VALID THRU",
  validThruDate = "12/22",  
  cardNumber = "3778 **** **** 1234",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[50%] md:w-full gap-8 rounded-[24px]`}>
      <div className="mx-6 mt-[22px] flex items-start justify-center self-stretch">
        <div className="flex flex-1 flex-col items-start">
          <Text size="textxs" as="p" className="font-lato text-[12px] font-normal text-white-a700">
            {balanceText}
          </Text>
          <Text size="headingmd" as="h5" className="font-lato text-[20px] font-normal text-white-a700">
            {balanceAmount}
          </Text>
        </div>
        <Img src="images/img_chip_card.png" alt="Card Image" className="h-[34px] object-cover" />
      </div>

      <div className="mx-6 flex justify-center self-stretch">
        <div className="flex flex-1 flex-col items-start">
          <Text size="textxs" as="p" className="font-lato text-[12px] font-normal text-white-a700_b2">
            {cardHolderLabel}
          </Text>
          <Text size="headingxs" as="p" className="font-lato text-[15px] font-normal text-white-a700">
            {cardHolderName}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Text size="textxs" as="p" className="font-lato text-[12px] font-normal text-white-a700_b2">
            {validThruLabel}
          </Text>
          <Text size="textlg" as="p" className="font-lato text-[15px] font-normal text-white-a700">
            {validThruDate}
          </Text>
        </div>
      </div>

      <div className="flex justify-between gap-5 self-stretch rounded-bl-[24px] rounded-br-[24px] bg-gradient px-6 py-[18px] sm:px-5">
        <Heading size="headinglg" as="p" className="self-end text-[22px] font-normal text-white-a700">
          {cardNumber}
        </Heading>
        <Img src="images/img_contrast.svg" alt="Contrast Image" className="h-[30px]" />
      </div>
    </div>
  );
}
