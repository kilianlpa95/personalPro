import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ManagePage } from '../manage-emp/manage-emp';
import { ViewPage } from '../view-emp/view-emp';
//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'home'
})*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  updateRecord(item:any) : void {
    this.navCtrl.push(ManagePage, { record : item });
  }

  addRecord() : void {
    this.navCtrl.push(ManagePage);
  }

  viewRecord(item:any) : void {
    var modal = this.modal.create(ViewPage, { record : item });
    modal.present();
  }

  displayNotification(message : string) : void{
    var toast = this.toast.create({
      message : message,
      duration : 1500
    });
  }

  /*ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }*/
}
