import React from "react";

export default function AccountSettings() {
  return (
    <div className="flex min-h-screen items-start bg-gray-50 my-5">
      <div className="w-full max-w-md bg-white shadow-sm rounded-md overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile Section */}
        <div className="px-4 py-5 flex items-start space-x-4 bg-gray-50">
          {/* Avatar with badge */}
          <div className="relative">
            <img
              src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
              alt="User Avatar"
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs">
              ✎
            </span>
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 py-4 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr. Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
