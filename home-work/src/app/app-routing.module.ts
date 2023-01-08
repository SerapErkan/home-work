import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

const routes: Routes = [

  {
    path: "",
    component: LayoutOneComponent
  },
  {
    path: "one",
    component: LayoutOneComponent
  },
  {
    path: "two",
    component: LayoutTwoComponent
  },

  {
    path: "data",
    loadChildren: () => import('./data/data.module')
      .then(m => m.DataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
