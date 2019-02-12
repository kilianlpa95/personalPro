import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../providers/user-service/user-service';
import { ImageProvider } from '../providers/image/image';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewPage } from '../pages/view-emp/view-emp';
import { ManagePage } from '../pages/manage-emp/manage-emp';
import { DeletePage } from '../pages/pages-delete/pages-delete';
import { ManageProjects } from '../pages/manage-project/manage-project';
import { ProjectHome } from '../pages/projecthome/projecthome';
import { DeleteProject } from '../pages/deletepr/deletepr';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HomePageTabs } from '../pages/tabs/tabs';
import { HomePageSlide } from '../pages/slide/slide';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewPage,
    ManagePage,
    DeletePage,
    ManageProjects,
    ProjectHome,
    DeleteProject,
    HomePageTabs,
    HomePageSlide
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewPage,
    ManagePage,
    DeletePage,
    ManageProjects,
    ProjectHome,
    DeleteProject,
    HomePageTabs,
    HomePageSlide
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    ImageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
