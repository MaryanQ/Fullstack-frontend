import Discipline from "./Disciplin";

export default interface Participant {
  id: number;
  navn: string;
  køn: string;
  alder: number;
  klub: string;
  disciplines: Discipline[];
}
