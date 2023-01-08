import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CollectionsComponent } from './collections/collections.component';
import { FaqComponent } from './faq/faq.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModelComponent } from './model/model.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'collections', component: CollectionsComponent },
  { path: 'collections/model/:id', component: ModelComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'main', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
