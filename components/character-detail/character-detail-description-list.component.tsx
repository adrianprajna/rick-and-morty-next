import { PaperClipIcon } from "@heroicons/react/solid";
import CharacterDetailModel from "../../models/character-detail.model";

export default function CharacterDetailDescriptionList({ data, title }: any) {
  const character: CharacterDetailModel = data;

  return (
    <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg mt-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Information
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Origin</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Name</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      {character.origin.name}
                    </span>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Dimension</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      {character.origin.dimension === null
                        ? "-"
                        : character.origin.dimension}
                    </span>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Type</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      {character.origin.type === null
                        ? "-"
                        : character.origin.type}
                    </span>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Name</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      {character.location.name}
                    </span>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Dimension</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">
                      {character.location.dimension === null
                        ? "-"
                        : character.location.dimension}
                    </span>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">Type</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="font-medium text-indigo-600">
                      {character.location.type === null
                        ? "-"
                        : character.location.type}
                    </span>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Episodes</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {character.episode.map((eps) => (
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm" key={eps.id}>
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        {eps.name} | {eps.air_date}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Watch
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
