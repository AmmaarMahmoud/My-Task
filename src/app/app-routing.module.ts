import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './user-managment/layout/layout.component';

const routes: Routes = [
  {path:'', component:LayoutComponent,children:[
    {path:'',
      loadChildren: () => import('./user-managment/user-managment.module').then(m => m.UserManagmentModule)
    }
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
