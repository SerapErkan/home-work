import { FormModel } from "src/app/libs";

export interface FormStoreState {
    FormModel:FormModel | null;
}

export const initialFormStoreState: FormStoreState = {
    FormModel: null,
};