import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ViewController,
         ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@IonicPage({
   name: 'ViewPage'
})

@Component({
  selector: 'page-view-emp',
  templateUrl: 'view-emp.html',
})
export class ViewPage {
  
   public name : string;
   
   public description : string;
   
   public thumbnail : string;

   constructor(public navCtrl 		: NavController,
   			   public navParams 	: NavParams,
   			   private toast 		: ToastController,
   			   private view        : ViewController,
   			   private http 		: HttpClient){

            }
   
   ionViewDidLoad()
   {
      this.name 				=	this.navParams.data.record.name;
      this.description			=	this.navParams.data.record.description;
      this.thumbnail			=	this.navParams.data.record.thumbnail;

   }
   
   displayNotification(message : string) : void
   {
      let toast = this.toast.create({
         message 	: message,
         duration 	: 3000
      });
      toast.present();
   }
   
   closeModal() : void
   {
      this.view.dismiss();
   }

}