import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage,
         NavController,
         NavParams,
         ToastController } from 'ionic-angular';
import {
   FormBuilder,
   FormGroup,
   Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';


@IonicPage({
	name: 'ManagePage'
})
@Component({
  selector: 'page-manage-emp',
  templateUrl: 'manage-emp.html',
})
export class ManagePage {
   
   public form: FormGroup;
   public name: any;
   public description: any;
   public thumbnail: any;
   public displayed: any;
   private _ID: String;
   public image: any;
   public pageTitle: string;
   private host : string = "http://localhost:3000/";



   constructor(public navCtrl : NavController,
   			   public navParams : NavParams,
   			   private fb : FormBuilder,
   			   private http : HttpClient,
   			   private toast : ToastController,
   			   private imageNail : ImageProvider)
   {
      this.form = this.fb.group({
         'name' : ['', Validators.required],
         'description' : ['', Validators.required],
         'thumbnail' : ['', Validators.required],
         'displayed' : ['', Validators.required]
      });

   }
   
   ionViewDidLoad() : void
   {
     if(this.navParams.get("record"))
     {
        this._ID = this.navParams.data.record._id;
        this.name = this.navParams.data.record.name;
        this.description =	this.navParams.data.record.description;
        this.thumbnail = this.navParams.data.record.thumbnail;
        this.image =	this.navParams.data.record.thumbnail;
        this.displayed = this.navParams.data.record.displayed;
        this.pageTitle = "Update";
     }
     else {
        this.pageTitle = "Create";
     }
   }
   
   manageEmp() : void
   {
      var name : any = this.form.controls['name'].value,
          description : any = this.form.controls['description'].value,
          thumbnail : any = this.form.controls['thumbnail'].value,
          displayed : any = this.form.controls['displayed'].value,
          headers : any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options : any = { name : name, description : description, thumbnail : thumbnail, displayed: displayed },
          url : any = this.host + "api/emp";
          
      if(this.navParams.get("record"))
      {
         this.http
         .put(url + '/' + this._ID, options, headers)
         .subscribe((data : any) =>
         {
            this.clearForm();
            this.displayNotification(name + ' was successfully updated');
         },
         (error : any) =>
         {
            console.dir(error);
         });
      }
      else
      {
         this.http
         .post(url, options, headers)
         .subscribe((data : any) =>
         {
            this.clearForm();
            this.displayNotification(name + ' was successfully created');
         },
         (error : any) =>
         {
            console.dir(error);
         });
      }
   }

   clearForm() : void
   {
      this.name = "";
      this.description = "";
      this.thumbnail = "";
      this.image = "";
      this.displayed = "";
      this._ID = "";
   }
   
   displayNotification(message : string) : void
   {
      let toast = this.toast.create({
         message : message,
         duration : 3000
      });
      toast.present();
   }
   
   takePhotograph() : void
   {
      this.imageNail
      .takePhotograph()
      .then((image)=>
      {
         this.thumbnail = image.toString();
         this.image = image.toString();
      })
      .catch((err)=>
      {
         console.log(err);
      });
   }
   
   selectImage() : void
   {
      this.imageNail
      .selectPhotograph()
      .then((image)=>
      {
         this.thumbnail = image.toString();
         this.image = image.toString();
      })
      .catch((err)=>
      {
         console.log(err);
      });
   }
}