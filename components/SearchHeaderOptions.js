import { useRouter } from "next/router";
import SearchOption from "./SearchOption";

import { ImImages } from "react-icons/im";
import { FiSearch } from "react-icons/fi";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchOption
        title="All"
        Icon={FiSearch}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchOption
        title="Images"
        Icon={ImImages}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
