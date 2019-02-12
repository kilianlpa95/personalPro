import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteProject } from './deletepr';

@NgModule({
  declarations: [
    DeleteProject,
  ],
  imports: [
    IonicPageModule.forChild(DeleteProject),
  ],
})
export class PagesDeletePageModule {}
