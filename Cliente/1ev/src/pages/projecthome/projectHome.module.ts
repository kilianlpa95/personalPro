import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectHome } from './projecthome';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    ProjectHome
  ],
  imports: [
    IonicPageModule.forChild(ProjectHome),
    SuperTabsModule
  ],
  entryComponents:[
    ProjectHome
  ]
})
export class ProjectHomeModule {}
