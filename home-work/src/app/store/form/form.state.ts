import { FormModel } from "src/libs";


export interface FormStoreState {
    FormModel:FormModel | null;
}

export const initialFormStoreState: FormStoreState = {
    FormModel: null,
};