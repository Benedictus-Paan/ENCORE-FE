import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
      {/* ============ HEADER SECTION (gradient sebentar) ============ */}
      <div className="bg-brand-gradient px-5 py-4 sm:px-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Customers Demographic
            </h3>
            <p className="mt-1 text-theme-sm text-white/70">
              Number of customer based on country
            </p>
          </div>

          <div className="relative inline-block">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <MoreDotIcon className="size-6 text-white/60 hover:text-white" />
            </button>

            <Dropdown
              isOpen={isOpen}
              onClose={closeDropdown}
              className="w-40 p-2 dark:bg-second-700 dark:border-second-700"
            >
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full rounded-lg text-left font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-second-500 dark:hover:text-white"
              >
                View More
              </DropdownItem>
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full rounded-lg text-left font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-second-500 dark:hover:text-white"
              >
                Delete
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* ============ BODY SECTION (bg-second-500) ============ */}
      <div className="bg-white p-5 dark:bg-second-500 sm:p-6">
        {/* Map */}
        <div className="my-6 overflow-hidden rounded-2xl border border-gray-200 px-4 py-6 dark:border-gray-800 sm:px-6">
          <div
            id="mapOne"
            className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
          >
            <CountryMap />
          </div>
        </div>

        {/* Country list */}
        <div className="space-y-5">
          {/* USA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-full max-w-8 items-center rounded-full">
                <img src="./images/country/country-01.svg" alt="usa" />
              </div>
              <div>
                <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                  USA
                </p>
                <span className="block text-theme-xs text-gray-500 dark:text-gray-400">
                  2,379 Customers
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[140px] items-center gap-3">
              <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
              </div>
              <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                79%
              </p>
            </div>
          </div>

          {/* France */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-full max-w-8 items-center rounded-full">
                <img src="./images/country/country-02.svg" alt="france" />
              </div>
              <div>
                <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                  France
                </p>
                <span className="block text-theme-xs text-gray-500 dark:text-gray-400">
                  589 Customers
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[140px] items-center gap-3">
              <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div className="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
              </div>
              <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                23%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
