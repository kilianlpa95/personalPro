import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';
import { ManageProjects } from '../manage-project/manage-project';
import { DeleteProject } from '../deletepr/deletepr';
import { HomePage } from '../home/home';
//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'ProjectHome'
})*/

@Component({
  selector: 'page-home-project',
  templateUrl: 'projecthome.html'
})
export class ProjectHome {

  public items : Array<any>;

  private host : string = "http://localhost:3000/";

  constructor(public navCtrl: NavController,
              private modal : ModalController,
              private toast : ToastController,
              private http : HttpClient,
              /*public userService: UserService*/) {

  }

  ionViewDidEnter(): void{
    this.retrieve();
  }

  deleteRecord (item : any) : void{
    var project_id : string = item._id;
    var url : any = this.host + "api/project/" + project_id;

    this.http.delete(url).subscribe((data:any) =>{
      this.retrieve();
      this.displayNotification('Project successfully deleted.');
    },(error:any) =>{
        console.dir(error);
    });
  }

  retrieve() : void{
    this.http.get(this.host + "api/project").subscribe((data:any) => {
      this.items = data.records;
    },
    (error:any) => {
      console.dir(error);
    });
  }

  updateRecord(item:any) : void {
    this.navCtrl.push(ManageProjects, { record : item });
  }

  addRecord() : void {
    this.navCtrl.push(ManageProjects);
  }

  deleteTab() : void {
    this.navCtrl.push(DeleteProject);
  }

  Home(){
    this.navCtrl.push(HomePage);
  }

  displayNotification(message : string) : void{
    var toast = this.toast.create({
      message : message,
      duration : 1500
    });
  }
}
