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
//import { ImageProvider } from '../../providers/image/image';


@IonicPage({
	name: 'ManageProjects'
})
@Component({
  selector: 'page-manage-prject',
  templateUrl: 'manage-project.html',
})
export class ManageProjects {

   public items : Array<any>;
   
   public form: FormGroup;
   public name: any;
   public description: any;
   public employees: any;
   public manager: any;
   private _ID: String;
   public pageTitle: string;
   private host : string = "http://localhost:3000/";



   constructor(public navCtrl : NavController,
   			   public navParams : NavParams,
   			   private fb : FormBuilder,
   			   private http : HttpClient,
   			   private toast : ToastController)
   {
      this.form = this.fb.group({
         'name' : ['', Validators.required],
         'description' : ['', Validators.required],
         'employees' : ['', Validators.required],
         'manager' : ['', Validators.required]
      });

   }

   ionViewDidEnter(): void{
     this.retrieve();
   }
   
   ionViewDidLoad() : void
   {
     if(this.navParams.get("record"))
     {
        this._ID = this.navParams.data.record._id;
        this.name = this.navParams.data.record.name;
        this.description =	this.navParams.data.record.description;
        this.employees = this.navParams.data.record.employees;
        this.manager = this.navParams.data.record.manager;
        this.pageTitle = "Update";
     }
     else {
        this.pageTitle = "Create";
     }
   }
   
   manageProject() : void
   {
      var name : any = this.form.controls['name'].value,
          description : any = this.form.controls['description'].value,
          employees : any = this.form.controls['employees'].value,
          manager : any = this.form.controls['manager'].value,
          headers : any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options : any = { name : name, description : description, employees : employees, manager: manager },
          url : any = this.host + "api/project";
          
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

   retrieve() : void{
     this.http.get(this.host + "api/emp").subscribe((data:any) => {
       this.items = data.records;
     },
     (error:any) => {
       console.dir(error);
     });
   }

   clearForm() : void
   {
      this.name = "";
      this.description = "";
      this.employees = "";
      this.manager = "";
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
}