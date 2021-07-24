import Episode from "./episode.model";
import Origin from "./origin.model";

interface CharacterDetailModel {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Origin,
    image: string,
    created: string,
    episode: Episode[]
}

export default CharacterDetailModel;