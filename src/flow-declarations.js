type FormChangeType = (s: Object) => void;

export type FieldOptionType = {
  value: string,
  label: string
};

export type FieldType = {
  name: string,
  label: string,
  value: string,
  placeholder: string,
  validations: Array,
  options: ?FieldOptionType[],
  onChange: ?FormChangeType
};

export type FormPropsType = {
  fields: FieldType[],
  errors: Object,
  onChange: FormChangeType,
  data: Object,
  layout: ?React$Element<any>
};
