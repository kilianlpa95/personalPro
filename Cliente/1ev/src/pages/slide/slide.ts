import { Component, ViewChild } from '@angular/core';
import { /*IonicPage,*/ ModalController, NavController, ToastController, AlertController } from 'ionic-angular';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';

//import { UserService } from '../../providers/user-service/user-service';

/*@IonicPage({
  name: 'home'
})*/

@Component({
  selector: 'page-home-slide',
  templateUrl: 'slide.html'
})
export class HomePageSlide {

  constructor(private http : HttpClient) {

  }

  public items : Array<any>;

  private host : string = "http://localhost:3000/";

  ionViewDidEnter(): void{
    this.retrieve();
  }

  retrieve() : void{
    this.http.get(this.host + "api/emp").subscribe((data:any) => {
      this.items = data.records;
    },
    (error:any) => {
      console.dir(error);
    });
  }

}
