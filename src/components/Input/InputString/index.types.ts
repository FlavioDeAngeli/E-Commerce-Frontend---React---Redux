export type InputStringProps = {
  id: string;
  type: string;
  placeholder: string;
  min: number;
  max: number;
  pattern?: string;
  handleChange: Function;
  // ref: HTMLInputElement;
};
