import { Participant } from "./Participant";

export interface Discipline {
  id: number;
  name: string;
  resultType: string;
  participants: Participant[]; // A discipline can have multiple participants
}
