"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full h-10 flex justify-center items-center mt-8 ">
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="p-2 text-black w-3/4 h-10 rounded-lg bg-gradient-to-br from-[#E18302] to-white border-2 border-black placeholder-black font-sans"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
