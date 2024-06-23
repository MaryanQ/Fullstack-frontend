export default interface Result {
  map(
    arg0: (result: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: number;
  resulttype: string;
  date: Date;
  resultValue: string;
}
