import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'collections', component: CollectionsComponent },
  { path: 'main', component: MainPageComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
