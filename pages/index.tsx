import { GetStaticProps } from "next";
import Card from "../components/card/card.component";
import Container from "../containers/container.component";
import client from "../apollo-client";
import { getAllCharacters } from "../queries/query";
import CharacterProps from "../models/type/character-props.type";
import Character from "../models/character.model";
import { useContext, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { LoadingContext } from "../provider/loading.provider";

export default function Home({ data }: CharacterProps) {
  const [characters, setCharacters] = useState(data);
  const [isLoading, setLoading] = useContext(LoadingContext);

  return (
    <LoadingOverlay
      active={isLoading}
      spinner
      text="Fetching data..."
      className={`h-screen ${isLoading ? 'overflow-hidden': ''}`}
    >
      <Container characters={characters} setCharacters={setCharacters}>
        <div className="max-w-screen-2xl mx-auto pb-4">
          <section className="text-center mt-8">
            <h1 className="text-3xl font-extrabold mb-4">Ricky and Morty</h1>
            <p className="text-xl">
              Here you can see all Rick and Morty characters
            </p>
          </section>
          <section className="flex flex-wrap justify-evenly">
            {characters.results?.map((character: Character) => (
              <Card character={character} key={character.id} />
            ))}
          </section>
        </div>
      </Container>
    </LoadingOverlay>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: getAllCharacters,
  });

  return {
    props: {
      data: data.characters,
    },
  };
};
