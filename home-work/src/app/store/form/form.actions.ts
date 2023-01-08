import { createAction, props } from '@ngrx/store';
import { FormModel} from 'src/libs';

export const setFormModel = createAction(
  '[Form] Set Form Model', //: Benzersiz key verdik. Bu action type/id olucak.
   props<{  FormModel:FormModel }>() 
   //: inline bir interface yazdık.
   //: Bu interface'in içindeki property'ler, action'ın içindeki property'ler/payload olucak.
);

export const deleteFormModel = createAction(
  '[Form] Delete Form Model'
);