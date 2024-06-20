import { makeOptions, handleHttpErrors } from "./fetchUtils";
import Result from "../types/Participant";
import Participant from "../types/Participant";
import Disciplin from "../types/Disciplin";

const API_URL = "http://localhost:8083";

const PARTICIPANTS_URL = API_URL + "/deltager";
const DISCIPLINES_URL = API_URL + "/disciplin";
const RESULTS_URL = API_URL + "/resultat";

export type ParticipantRequest = {
  navn: string;
  køn: string;
  alder: number;
  klub: string;
};

export type DisciplinRequest = {
  name: string;
  resultType: string;
};

export type ResultRequest = {
  resultatType: string;
  dato: Date;
  resultatVaerdi: string;
  deltagerId: number;
  disciplinId: number;
};

async function getParticipants(): Promise<Participant[]> {
  return await fetch(PARTICIPANTS_URL).then(handleHttpErrors);
}

async function createParticipant(
  newParticipant: ParticipantRequest
): Promise<Participant> {
  const options = makeOptions("POST", newParticipant);
  return await fetch(PARTICIPANTS_URL, options).then(handleHttpErrors);
}

async function updateParticipant(
  id: number,
  updatedParticipant: ParticipantRequest
): Promise<Participant> {
  const options = makeOptions("PUT", updatedParticipant);
  return await fetch(`${PARTICIPANTS_URL}/${id}`, options).then(
    handleHttpErrors
  );
}

async function deleteParticipant(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  await fetch(`${PARTICIPANTS_URL}/${id}`, options).then(handleHttpErrors);
}

async function getSingleParticipant(id: number): Promise<Participant> {
  return await fetch(`${PARTICIPANTS_URL}/${id}`).then(handleHttpErrors);
}

async function getDisciplines(): Promise<Disciplin[]> {
  return await fetch(DISCIPLINES_URL).then(handleHttpErrors);
}

async function createDiscipline(
  newDiscipline: DisciplinRequest
): Promise<Disciplin> {
  const options = makeOptions("POST", newDiscipline);
  return await fetch(DISCIPLINES_URL, options).then(handleHttpErrors);
}

async function updateDiscipline(
  id: number,
  updatedDiscipline: DisciplinRequest
): Promise<Disciplin> {
  const options = makeOptions("PUT", updatedDiscipline);
  return await fetch(`${DISCIPLINES_URL}/${id}`, options).then(
    handleHttpErrors
  );
}

async function deleteDiscipline(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  await fetch(`${DISCIPLINES_URL}/${id}`, options).then(handleHttpErrors);
}

async function getSingleDiscipline(id: number): Promise<Disciplin> {
  return await fetch(`${DISCIPLINES_URL}/${id}`).then(handleHttpErrors);
}

// Result API Methods
async function getResults(): Promise<Result[]> {
  return await fetch(RESULTS_URL).then(handleHttpErrors);
}

async function createResult(newResult: ResultRequest): Promise<Result> {
  const options = makeOptions("POST", newResult);
  return await fetch(RESULTS_URL, options).then(handleHttpErrors);
}

async function updateResult(
  id: number,
  updatedResult: ResultRequest
): Promise<Result> {
  const options = makeOptions("PUT", updatedResult);
  return await fetch(`${RESULTS_URL}/${id}`, options).then(handleHttpErrors);
}

async function deleteResult(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  await fetch(`${RESULTS_URL}/${id}`, options).then(handleHttpErrors);
}

async function getSingleResult(id: number): Promise<Result> {
  return await fetch(`${RESULTS_URL}/${id}`).then(handleHttpErrors);
}

export {
  getParticipants,
  createParticipant,
  updateParticipant,
  deleteParticipant,
  getSingleParticipant,
  getDisciplines,
  createDiscipline,
  updateDiscipline,
  deleteDiscipline,
  getSingleDiscipline,
  getResults,
  createResult,
  updateResult,
  deleteResult,
  getSingleResult,
};
