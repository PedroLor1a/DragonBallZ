"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Filters = () => {
    const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

const handleFilter = (term)=>{
    const params = new URLSearchParams(searchParams);
    if(term){
        params.set("filter", term)
    }else{
        params.delete("filter")
    }
replace(`${pathname}?${params.toString()}`)
}

  return (
    <div className="w-full h-10 flex justify-center items-center mt-8 ">
    <select
      className="text-black w-36 rounded h-8 bg-gradient-to-br from-[#E18302] to-white border-2 border-black"
      onChange={(e) => {
        handleFilter(e.target.value);
      }}>
      <option
        value="ALL"
        defaultValue={searchParams.get("query")?.toString()}>
        Filter by name
      </option>
      <option
        value="DESC"
        defaultValue={searchParams.get("query")?.toString()}>
        Desc
      </option>
      <option
        value="ASC"
        defaultValue={searchParams.get("query")?.toString()}>
        Asc
      </option>
    </select>
  </div>
  )
}

export default Filters
