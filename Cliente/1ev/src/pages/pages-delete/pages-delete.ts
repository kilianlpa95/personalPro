import { Component } from '@angular/core';
import { /*IonicPage,*/ ModalController, NavController, ToastController } from 'ionic-angular';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';
import { HomePage } from '../home/home';
//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'home'
})*/

@Component({
  selector: 'pages-delete',
  templateUrl: 'pages-delete.html'
})
export class DeletePage {

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
    var emp_id : string = item._id;
    var url : any = this.host + "api/emp/" + emp_id;

    this.http.delete(url).subscribe((data:any) =>{
      this.retrieve();
      this.displayNotification('Employee successfully deleted.');
    },(error:any) =>{
        console.dir(error);
    });
  }

  retrieve() : void{
    this.http.get(this.host + "api/emp").subscribe((data:any) => {
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

  homeTab(){
    this.navCtrl.push(HomePage);
  }
}
