import { Button, Input, Text, SelectBox, Img } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfileEditSection() {
  return (
    <>  
      {/* Profile Edit Section */}
      <div className="px-10 sm:px-5">
        {/* Tab Navigation Section */}
        <Tabs
          className="flex w-full flex-col gap-[50px] rounded-[24px] bg-white-a700 p-[30px] sm:p-5"
          selectedTabClassName="!text-indigo-600_01"
          selectedTabPanelClassName="!relative tab-panel--selected"
        >
          {/* Profile Tabs Section */}
          <div className="mt-1.5 flex flex-col items-center">
            <TabList className="relative z-[1] flex flex-wrap items-start gap-[74px] px-4 md:gap-5">
              <Tab className="mb-2.5 text-[16px] font-medium text-blue_gray-400">
                Edit Profile
              </Tab>
              <Tab className="text-[16px] font-medium text-blue_gray-400">
                Preferences
              </Tab>
              <Tab className="text-[16px] font-medium text-blue_gray-400">
                Security
              </Tab>
            </TabList>
            <div className="h-px w-full self-stretch bg-gray-300" />
          </div>

          {/* Tab Panels */}
          {[...Array(3)].map((_, index) => (
            <TabPanel
              key={`tab-panel${index}`}
              className="absolute flex justify-center"
            >
              {/* Profile Content Section */}
              <div className="w-full">
                {/* Profile Form Section */}
                <div className="flex items-start md:flex-col">
                  {/* Profile Image Section */}
                  <div className="flex w-[14%] justify-center md:w-full">
                    <div className="flex w-full items-center">
                      <Img
                        src="images/img_ellipse_28.png"
                        alt="Profile Image"
                        className="h-[130px] w-[70%] rounded-[64px] object-contain"
                      />
                      <Button
                        size="xs"
                        shape="round"
                        className="relative mb-4 ml-[-28px] w-[30px] self-end rounded-[14px] px-1.5"
                      >
                        <Img src="images/img_edit.svg" alt="Edit" />
                      </Button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex gap-7 md:flex-col">
                        {/* Name Field */}
                        <div className="flex w-full flex-col gap-2.5">
                          <Text size="textxl" as="p" className="text-[16px] font-normal text-blue_gray-400">
                            Your Name
                          </Text>
                          <Input
                            shape="round"
                            name="Name Input"
                            placeholder="Charlene Reed"
                            className="self-stretch rounded-[14px] border border-solid border-gray-300"
                          />
                        </div>

                        {/* Username Field */}
                        <div className="flex w-full flex-col gap-2.5">
                          <Text size="textxl" as="p" className="text-[16px] font-normal text-blue_gray-400">
                            Username
                          </Text>
                          <Input
                            shape="round"
                            name="Username Input"
                            placeholder="Charlene Reed"
                            className="self-stretch rounded-[14px] border border-solid border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="flex gap-7 md:flex-col">
                        {/* Email Field */}
                        <div className="flex w-full flex-col gap-2.5">
                          <Text size="textxl" as="p" className="text-[16px] font-normal text-blue_gray-400">
                            Email
                          </Text>
                          <Input
                            shape="round"
                            name="Email Input"
                            placeholder="user@gmail.com"
                            className="self-stretch rounded-[14px] border border-solid border-gray-300"
                          />
                        </div>

                        {/* Password Field */}
                        <div className="flex w-full flex-col gap-2.5">
                          <Text size="textxl" as="p" className="text-[16px] font-normal text-blue_gray-400">
                            Password
                          </Text>
                          <Input
                            shape="round"
                            type="password"
                            name="Password Input"
                            placeholder="********"
                            className="self-stretch rounded-[14px] border border-solid border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="flex gap-7 md:flex-col">
                        {/* Date of Birth Field */}
                        <div className="flex w-full flex-col gap-2.5">
                          <Text size="textxl" as="p" className="text-[16px] font-normal text-blue_gray-400">
                            Date of Birth
                          </Text>
                          <SelectBox
                            shape="round"
                            name="Birthdate Dropdown"
                            placeholder="25 January 1990"
                            options={dropDownOptions}
                            indicator={
                              <Img
                                src="images/img_arrowdown_blue_gray_400.svg"
                                alt="Arrow Down"
                                className="h-[6px] w-[12px]"
                              />
                            }
                            className="self-stretch rounded-[14px] border border-solid border-gray-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <Button
                      size="lg"
                      shape="round"
                      className="min-w-[190px] rounded-[14px] px-[34px] font-medium sm:px-5"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
}
