import { CloseSVG } from "../Input/close";
import { Img, Button, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-end bg-white-a700`}
    >
      <div className="mt-5 flex w-[96%] flex-col items-end gap-5 md:w-full">
        <div className="mx-auto flex w-full max-w-[1362px] items-center justify-between gap-5 self-stretch md:flex-col md:px-5">
          <Img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="h-[36px] w-[166px] object-contain"
          />
          <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:flex-col">
            <Heading
              size="headings"
              as="h3"
              className="text-[28px] font-semibold text-blue_gray-800 md:text-[26px] sm:text-[24px]"
            >
              Overview
            </Heading>
            <div className="flex w-[46%] items-center justify-center gap-[30px] md:w-full sm:flex-col">
              <Input
                name="Search Field"
                placeholder="Search for something"
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="Search"
                    className="h-[20px] w-[20px] object-contain"
                  />
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      fillColor="#718ebfff"
                    />
                  ) : null
                }
                className="flex h-[50px] items-center justify-center gap-3.5 rounded-[24px] bg-gray-100 pl-6 pr-3 text-[15px]"
              />
              <a href="#">
                <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-gray-100 px-3">
                  <Img src="images/img_settings_1.svg" alt="Settings Icon" />
                </Button>
              </a>
              <a href="#">
                <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-gray-100 px-3">
                  <Img
                    src="images/img_002_notification_1.svg"
                    alt="Notification Icon"
                  />
                </Button>
              </a>
              <Img
                src="images/img_pexels_christin.png"
                alt="Profile Image"
                className="h-[60px] w-[14%] rounded-[30px] object-contain sm:w-full"
              />
            </div>
          </div>
        </div>
        <div className="h-px w-[84%] bg-indigo-50_01" />
      </div>
    </header>
  );
}
