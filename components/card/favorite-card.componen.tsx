import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import { useContext } from "react";
import { ModalContext } from "../../provider/modal.provider";
import { removeData } from "../../utils/local-storage";
import Modal from "../modal/modal.component";

export default function FavoriteCard({ character }: any) {
  const [modal, setModal] = useContext(ModalContext);

  const removeFavoriteCharacter = () => {
    removeData(character);
    setModal({
      open: true,
      message: "Successfully removed this character from favorites!",
    });
    router.replace(router.asPath);
  };

  return (
    <div className="rounded-lg shadow-lg w-72 mt-6 overflow-hidden mr-5">
      <Modal/>
      <div>
        <Image
          alt="Picture of the caracter"
          src={character.image}
          width={288}
          height={288}
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="content">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 mb-2">
            {character.species}
          </span>
          <h2 className="text-xl font-bold mb-2">{character.name}</h2>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full justify-center"
            onClick={removeFavoriteCharacter}
          >
            Remove from Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
