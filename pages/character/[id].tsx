import { GetServerSideProps } from "next";
import { useEffect } from "react";
import client from "../../apollo-client";
import CharacterDetail from "../../components/character-detail/character-detail.component";
import Container from "../../containers/container.component";
import CharacterDetailModel from "../../models/character-detail.model";
import { ModalProvider } from "../../provider/modal.provider";
import { getCharacter } from "../../queries/query";
import { initializeData } from "../../utils/local-storage";

export default function CharacterDetailPage({ data }: any) {

  if (data === null) {
    return (
      <Container>
        <div className="w-screen flex justify-center items-center mt-10">
          <h1 className="text-3xl font-bold">
            There is no available character!
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ModalProvider>
        <CharacterDetail data={data}/>
      </ModalProvider>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data } = await client.query({
      query: getCharacter,
      variables: {
        id: params?.id,
      },
    });

    return {
      props: {
        data: data.character,
      },
    };
  } catch {
    return {
      props: {
        data: null,
      },
    };
  }
};
