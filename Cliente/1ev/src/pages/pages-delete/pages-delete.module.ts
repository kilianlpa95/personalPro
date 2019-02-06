import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePage } from './pages-delete';

@NgModule({
  declarations: [
    DeletePage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePage),
  ],
})
export class PagesDeletePageModule {}
