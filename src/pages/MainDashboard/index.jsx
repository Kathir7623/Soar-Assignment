import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import TransactionDetails from "../../components/TransactionDetails";
import UserCard from "../../components/UserCard";
import MaindashboardTransferRow from "./MaindashboardTransferRow";
import WeeklyActivitySection from "./WeeklyActivitySection";
import React, { Suspense } from "react";

const transactionHistoryList = [
  { transactionDescription: "Deposit from my Card", transactionDate: "28 January 2021", transactionAmount: "-$850" },
  { transactionDescription: "Deposit Paypal", transactionDate: "25 January 2021", transactionAmount: "+$2,500" },
  { transactionDescription: "Jemi Wilson", transactionDate: "21 January 2021", transactionAmount: "+$5,400" },
];

export default function MainDashboardPage() {
  return (
    <>
      <Helmet>
        <title>User Dashboard - Overview & Statistics</title>
        <meta
          name="description"
          content="Access your dashboard to view recent transactions, balance history, and expense statistics. Manage your accounts, investments, and cards efficiently."
        />
      </Helmet>
      <div className="flex w-full items-start bg-gray-100">
        {/* Sidebar navigation section */}
        <Sidebar1 />
        <div className="mb-[30px] flex w-[83%] flex-col gap-6 self-center">
          {/* Header section */}
          <Header />

          {/* Cards overview section */}
          <div className="mx-10 flex items-center gap-[30px] md:mx-0 md:flex-col">
            <div className="flex flex-1 flex-col gap-4 md:self-stretch md:px-5">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Heading size="headings" as="h1" className="self-center text-[22px] font-semibold text-blue_gray-900">
                  My Cards
                </Heading>
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                  <Heading size="headingmd" as="h2" className="text-[17px] font-semibold text-blue_gray-900">
                    See All
                  </Heading>
                </a>
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <UserCard className="bg-indigo-600_01" />
                <UserCard
                  balanceText="Balance"
                  balanceAmount="$5,756"
                  cardHolderLabel="CARD HOLDER"
                  cardHolderName="Eddy Cusuma"
                  validThruLabel="VALID THRU"
                  validThruDate="12/22"
                  cardNumber="3778 **** **** 1234"
                  className="bg-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Recent transactions section */}
          <div className="flex w-[32%] flex-col items-start gap-[18px] md:w-full md:px-5">
            <Heading size="heading2x1" as="h3" className="text-[22px] font-semibold text-blue_gray-900">
              Recent Transaction
            </Heading>
            <div className="self-stretch rounded-[24px] bg-white-a700 p-6 sm:p-5">
              <div className="flex flex-col gap-2.5">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {transactionHistoryList.map((d, index) => (
                    <TransactionDetails {...d} key={`transactionsList${index}`} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>

          {/* Weekly activity section */}
          <WeeklyActivitySection />

          {/* Transfers section */}
          <MaindashboardTransferRow />
        </div>
      </div>
    </>
  );
}
