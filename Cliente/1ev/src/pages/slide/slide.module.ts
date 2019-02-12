import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageSlide } from './slide';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    HomePageSlide,
  ],
  imports: [
    IonicPageModule.forChild(HomePageSlide),
    SuperTabsModule
  ],
})
export class HomePageSlideModule {}
