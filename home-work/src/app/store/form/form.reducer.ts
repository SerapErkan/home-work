
import { createReducer, on } from '@ngrx/store';
import { FormStoreState, initialFormStoreState } from './form.state';
import { deleteFormModel, setFormModel } from './form.actions';

export const formReducer = createReducer<FormStoreState>(
  initialFormStoreState,
  on(
    setFormModel, 
    (currentState, action) => {
   
      return {
        ...currentState,
        FormModel: action.FormModel,
      };
    }
  ),
  on(deleteFormModel, (currentState) => {
    return {
      ...currentState,
      FormModel: null, // 0x1234 (hexadecimal) -> 0
    };
  })
);