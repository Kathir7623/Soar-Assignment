import React from "react";
import { Text, Img, Heading, Slider } from "../../components";

export default function MaindashboardTransferRow() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex items-center gap-[30px] px-10 md:flex-col sm:px-5">
      {/* Quick Transfer Section */}
      <div className="flex w-[40%] flex-col items-start gap-[18px] md:w-full">
        <Heading
          size="heading2xl"
          as="h2"
          className="text-[22px] font-semibold text-blue_gray-800"
        >
          Quick Transfer
        </Heading>
        <div className="flex flex-col gap-[26px] self-stretch rounded-[24px] bg-white-a700 px-6 py-[34px] sm:p-5">
          <div className="flex items-center justify-between gap-5 sm:flex-col">
            <div className="mx-auto flex w-[78%] gap-[30px] sm:mx-0 sm:w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 2 },
                  1051: { items: 3 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="px-[15px]">
                      <div className="flex flex-col gap-3">
                        <Img
                          src="images/img_ellipse_18.png"
                          alt="Slider Image"
                          className="ml-1 mr-2 h-[70px] rounded-[34px] object-cover md:mx-0"
                        />
                        <div className="flex flex-col items-center gap-1">
                          <Heading
                            size="headings"
                            as="h3"
                            className="text-[16px] font-bold text-indigo-700"
                          >
                            Livia Bator
                          </Heading>
                          <Heading
                            size="headingxs"
                            as="h4"
                            className="text-[15px] font-bold text-blue_gray-400"
                          >
                            CEO
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <div className="w-[12%] sm:w-full">
              <div className="flex flex-col items-center rounded-[24px] bg-white-a700 p-3 shadow-xs">
                <Img
                  src="images/img_arrow.svg"
                  alt="Arrow Image"
                  className="h-[24px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[26px]">
            <Text
              size="textxl"
              as="p"
              className="text-[16px] font-normal text-blue_gray-400"
            >
              Write Amount
            </Text>
            <div className="flex flex-1 items-center justify-between gap-5 rounded-[24px] bg-gray-100_04">
              <Heading
                size="headings"
                as="h5"
                className="ml-[30px] text-[16px] font-bold text-indigo-700"
              >
                525.50
              </Heading>
              <div className="flex items-center gap-3 rounded-[24px] bg-indigo-700 p-3 shadow-xs">
                <Text
                  size="textxl"
                  as="p"
                  className="text-[16px] font-medium text-white-a700"
                >
                  Send
                </Text>
                <Img
                  src="images/img_save.svg"
                  alt="Save Image"
                  className="h-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Balance History Section */}
      <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
        <Heading
          size="heading2xl"
          as="h6"
          className="text-[22px] font-semibold text-blue_gray-900"
        >
          Balance History
        </Heading>
        <div className="self-stretch rounded-[24px] bg-white-a700 px-[22px] py-[26px] sm:p-5">
          <div className="relative h-[220px] md:h-auto">
            <Img
              src="images/img_group_gray_100_02.svg"
              alt="History Image"
              className="mt-1.5 h-[184px] w-[92%] object-contain"
            />
            <div className="absolute inset-0 m-auto flex h-max flex-1 items-start sm:relative sm:flex-col">
              <div className="flex w-[6%] flex-col gap-[30px] sm:w-full">
                {[800, 600, 400, 200].map((value) => (
                  <div
                    key={value}
                    className="flex items-center justify-center gap-2"
                  >
                    <Text
                      as="p"
                      className="text-[13px] font-normal text-blue_gray-400"
                    >
                      {value}
                    </Text>
                    <div className="h-px w-[6px] bg-blue_gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-1 flex-col gap-1 self-end sm:self-stretch">
            <Img
              src="images/img_vector_indigo_600_01.png"
              alt="Vector Image"
              className="h-[176px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between gap-5">
                {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map(
                  (month) => (
                    <Text
                      key={month}
                      size="textmd"
                      as="p"
                      className="text-[14px] font-normal text-blue_gray-400"
                    >
                      {month}
                    </Text>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
