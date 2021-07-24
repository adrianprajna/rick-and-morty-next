import { SearchIcon } from "@heroicons/react/solid";

export default function SearchBar({value, onChangeHandle, searchCharacters}: any) {
  return (
    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
      <div className="max-w-lg w-full lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <form onSubmit={searchCharacters}>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
              placeholder="Search"
              type="search"
              value={value}
              onChange={onChangeHandle}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
