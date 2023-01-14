import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { ModelComponent } from './model/model.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionsComponent,
    MainPageComponent,
    FooterComponent,
    ModelComponent,
    FaqComponent,
    AboutComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SwiperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
