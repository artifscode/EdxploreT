import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PillersComponent } from './pillers/pillers.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { EdXplorecertificateComponent } from './ed-xplorecertificate/ed-xplorecertificate.component';
import { EdXplorecertificate2Component } from './ed-xplorecertificate2/ed-xplorecertificate2.component';
import { EnterComponent } from './enter/enter.component';
import { CreativeComponent } from './creative/creative.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { SubscriptionbannerComponent } from './subscriptionbanner/subscriptionbanner.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FeaturedcoursesComponent } from './featuredcourses/featuredcourses.component';
import { TopcategoriesComponent } from './topcategories/topcategories.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    BannerComponent,
    CarouselComponent,
    PillersComponent,
    CardDeckComponent,
    EdXplorecertificateComponent,
    EdXplorecertificate2Component,
    EnterComponent,
    CreativeComponent,
    SponsorshipComponent,
    SubscriptionbannerComponent,
    CopyrightComponent,
    FeaturedcoursesComponent,
    TopcategoriesComponent,
    CoursesComponent,
    ReviewsComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
