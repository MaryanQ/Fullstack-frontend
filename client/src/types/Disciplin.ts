import Participant from "./Participant";

export default interface Discipline {
  id: number;
  name: string;
  resultType: string;
  participants: Participant[]; // A discipline can have multiple participants
}
