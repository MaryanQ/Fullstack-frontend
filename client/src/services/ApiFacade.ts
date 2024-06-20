const API_URL = "http://localhost:8083";
import { makeOptions, handleHttpErrors } from "./fetchUtils";

const DELTAGER_URL = API_URL + "/deltager";
const DISCIPLIN = API_URL + "/disciplin";
const RESULTAT = API_URL + "/resultat";

export type ParticipentRequest = {
  name: string;
  gender: string;
  age: number;
  club: string;
};

export type DisciplinRequest = {
  name: string;
  resultType: string;
};

export type ResultatRequest = {
  resultatType: string;
  dato: Date;
  resultatVaerdi: string;
  deltagerId: number;
  disciplinId: number;
};
