import { Component, ViewChild } from '@angular/core';
import { /*IonicPage,*/ ModalController, NavController, ToastController, AlertController } from 'ionic-angular';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';
import { ManageProjects } from '../manage-project/manage-project';
import { ViewPage } from '../view-emp/view-emp';
import { DeleteProject } from '../deletepr/deletepr';
import { ProjectHome } from '../projecthome/projecthome';
import { SuperTabs } from 'ionic2-super-tabs';
import { SuperTabsController } from 'ionic2-super-tabs';
import { HomePage } from '../home/home';
//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'home'
})*/

@Component({
  selector: 'page-home-tabs',
  templateUrl: 'tabs.html'
})
export class HomePageTabs {

  Managepr: any = ManageProjects;
  ProjectHomet: any = ProjectHome;
  Deleteprt: any = DeleteProject;

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController,
              private modal : ModalController,
              private toast : ToastController,
              private superTabsCtrl: SuperTabsController,
              private http : HttpClient,
              private alertCtrl: AlertController
              /*public userService: UserService*/) {

  }

  slideToIndex(index: number){
    this.superTabs.slideTo(index);
  }

  onTabSelect(ev: any){
      this.selectedTab = ev.index;
  }

}
