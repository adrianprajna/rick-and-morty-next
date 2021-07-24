import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CharacterDetailModel from "../../models/character-detail.model";
import { ModalContext } from "../../provider/modal.provider";
import { charactersData, checkData, initializeData, removeData, saveData } from "../../utils/local-storage";
import Modal from "../modal/modal.component";
import CharacterDetailDescriptionList from "./character-detail-description-list.component";

export default function CharacterDetail({ data }: any) {
  const character: CharacterDetailModel = data;

  const [isFavoriteCharacter, setFavoriteCharacter] = useState(false);
  const [modal, setModal] = useContext(ModalContext);

  useEffect(() => {
    initializeData();
    const favCharacter = checkData(character);
    if(favCharacter !== undefined){
      setFavoriteCharacter(true);
    }
  }, [])

  const addFavoriteCharacter = () => {
    charactersData.push(character);
    saveData();
    setFavoriteCharacter(true);
    setModal({
      open: true,
      message: "Successfully added this character to favorites!"
    })
  };

  const removeFavoriteCharacter = () => {
    removeData(character);
    setFavoriteCharacter(false);
    setModal({
      open: true,
      message: "Successfully removed this character from favorites!"
    })
  }

  const renderFavoriteButton = () => {
    if (isFavoriteCharacter) {
      return (
        <button
          type="button"
          className="inline-flex items-center p-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center mt-6 w-4/5 mx-auto"
          onClick={removeFavoriteCharacter}
        >
          Remove from Favorite
        </button>
      );
    }

    return (
      <button
        type="button"
        className="inline-flex items-center p-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center mt-6 w-4/5 mx-auto"
        onClick={addFavoriteCharacter}
      >
        Add to Favorite
      </button>
    );
  };

  return (
    <div className="py-16 sm:pt-0">
      <Modal/>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="sm:py-16 lg:py-0 ">
          <div className=" mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20 flex flex-col">
            <div className="relative flex justify-center">
              <Image
                alt="Character Detail Picture"
                src={character.image}
                width={384}
                height={384}
                loading="eager"
                className="object-cover rounded-xl overflow-hidden"
              />
            </div>
            {renderFavoriteButton()}
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-0 w-full">
          {/* Content area */}
          <div className="text-center lg:text-left pt-4 sm:pt-0 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              {character.name}
            </h2>
            <div className="mt-4 text-gray-800 space-y-2">
              <p className="text-base">Status : {character.status}</p>
              <p className="text-base">Species : {character.species}</p>
              <p className="text-base">
                Type : {character.type === "" ? "-" : character.type}
              </p>
              <p className="text-base">Gender : {character.gender}</p>
            </div>
          </div>

          <CharacterDetailDescriptionList data={character} title="Origin" />
        </div>
      </div>
    </div>
  );
}
