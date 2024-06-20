import Participant from "./Participant";
import Discipline from "./Disciplin";

export default interface Result {
  id: number;
  resultValue: string; // Adjusted to resultValue based on the diagram
  resultType: string;
  date: Date;
  participant: Participant; // One result belongs to one participant
  discipline: Discipline; // One result belongs to one discipline
}
