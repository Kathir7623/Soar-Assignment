import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import ProfileEditSection from "./ProfileEditSection";
import React from "react";

export default function SettingEditProfilePage() {
  return (
    <>
      <Helmet>
        <title>Edit Your Profile - Update Personal Information</title>
        <meta
          name="description"
          content="Manage your profile settings and update your personal information such as name, email, and address to keep your account secure and up-to-date."
        />
      </Helmet>

      {/* Main content section */}
      <div className="flex w-full items-start bg-gray-100">
        {/* Sidebar navigation section */}
        <Sidebar11 />

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-[30px]">
          {/* Header section */}
          <Header />

          {/* Profile edit section */}
          <ProfileEditSection />
        </div>
      </div>
    </>
  );
}
