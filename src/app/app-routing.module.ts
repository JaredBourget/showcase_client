import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePageComponent } from './store/store-page/store-page.component'

const routes: Routes = [
  { path: 'store', component: StorePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
