import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePageTabs } from './tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    HomePageTabs,
  ],
  imports: [
    IonicPageModule.forChild(HomePageTabs),
    SuperTabsModule
  ],
})
export class HomePageTabsModule {}
