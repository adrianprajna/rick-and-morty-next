import { useEffect } from "react";
import FavoriteCard from "../components/card/favorite-card.componen";
import Container from "../containers/container.component";
import CharacterDetailModel from "../models/character-detail.model";
import { ModalProvider } from "../provider/modal.provider";
import { charactersData, initializeData } from "../utils/local-storage";

export default function favorite() {
  useEffect(() => {
    initializeData();
  }, []);

  const renderCharacters = () => {
    if (
      charactersData === undefined ||
      charactersData === null ||
      charactersData.length === 0
    ) {
      return (
        <h1 className="text-2xl font-bold mt-8">
          There is no favorite characters!
        </h1>
      );
    }

    return charactersData.map((character: CharacterDetailModel) => (
      <FavoriteCard character={character} key={character.id} />
    ));
  };

  return (
    <Container>
      <ModalProvider>
        <div className="max-w-screen-2xl mx-auto pb-4">
          {charactersData.length !== 0 && (
            <section className="text-center mt-8">
              <h1 className="text-3xl font-extrabold mb-4">
                Favorite Ricky and Morty Characters
              </h1>
              <p className="text-xl">
                Here you can see all your Rick and Morty favorite characters
              </p>
            </section>
          )}

          <section className="flex flex-wrap justify-evenly">
            {renderCharacters()}
          </section>
        </div>
      </ModalProvider>
    </Container>
  );
}
