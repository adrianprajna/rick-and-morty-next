import { useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "../searchbar/search-bar.component";
import { LoadingContext } from "../../provider/loading.provider";


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({
  characters = [],
  setCharacters = () => {},
}: any) {
  const [value, setValue] = useState("");
  const [isLoading, setLoading] = useContext(LoadingContext);

  const router = useRouter();

  const onChangeHandle = (e: any) => {
    setValue(e.target.value);
  };

  const searchCharacters = async (e: any) => {
    e.preventDefault();

    if (value === "") {
      window.location.reload();
      return;
    }

    setLoading(true);

    const data = await fetch("/api/search-characters", {
      method: "POST",
      body: value,
    }).then((res) => res.json());

    setLoading(false);

    if (data.data !== null) {
      setCharacters(data);
    }
  };

  const renderSearchBar = () => {
    if (characters.length === 0) {
      return <></>;
    }

    return (
      <SearchBar value={value} onChangeHandle={onChangeHandle} searchCharacters={searchCharacters} />
    );
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a
                        className={`${
                          router.route === "/"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Home
                      </a>
                    </Link>
                    <Link href="/favorite">
                      <a
                        className={`${
                          router.route.includes("/favorite")
                            ? "bg-gray-900 text-white"
                            : "text-gray-300"
                        } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Favorite
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {renderSearchBar()}

              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a
                  className={`${
                    router.route === "/"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Home
                </a>
              </Link>

              <Link href="/favorite">
                <a
                  className={`${
                    router.route.includes("/favorite")
                      ? "bg-gray-900 text-white"
                      : "text-gray-300"
                  }  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Favorite
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
