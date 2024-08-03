import Filters from "./Filters"
import SearchBar from "./SearchBar"

const InputsBar = () => {
  return (
    <div className="w-full h-10 flex justify-center items-center mt-8 mx-0">
      <SearchBar/>
      <Filters/>
    </div>
  )
}

export default InputsBar
