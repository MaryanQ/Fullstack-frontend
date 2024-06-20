import { Discipline } from "./Disciplin";
import { Participant } from "./Participant";

export interface Result {
  id: number;
  resultValue: string; // Adjusted to resultValue based on the diagram
  resultType: string;
  date: Date;
  participant: Participant; // One result belongs to one participant
  discipline: Discipline; // One result belongs to one discipline
}
