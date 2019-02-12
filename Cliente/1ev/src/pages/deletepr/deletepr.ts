import { Component } from '@angular/core';
import { /*IonicPage,*/ ModalController, NavController, ToastController } from 'ionic-angular';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';
import { ProjectHome } from '../projecthome/projecthome';
//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'home'
})*/

@Component({
  selector: 'deletepr',
  templateUrl: 'deletepr.html'
})
export class DeleteProject {

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

  displayNotification(message : string) : void{
    var toast = this.toast.create({
      message : message,
      duration : 1500
    });
  }

  projectHome(){
    this.navCtrl.push(ProjectHome);
  }
}
