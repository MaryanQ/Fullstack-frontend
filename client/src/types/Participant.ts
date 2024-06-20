import { Discipline } from "./Disciplin";

export interface Participant {
  id: number;
  name: string;
  gender: string;
  age: number;
  club: string;
  disciplines: Discipline[]; // A participant can have multiple disciplines
}
