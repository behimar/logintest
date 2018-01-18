import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Loading, AlertController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app'; // no se para que es
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public afAuth: AngularFireAuth, public loadingCtrl:LoadingController,
              public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    });
    this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    console.log("email" +this.myForm.value.email);
    console.log("pass" +this.myForm.value.password);

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() =>{
      console.log("User Logging");
      this.navCtrl.setRoot('HomePage');
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
,            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
  }
  goToSignup(){
    this.navCtrl.push('SignupPage');
  }
  goToResetPass(){
    this.navCtrl.push('ResetPasswordPage');
  }
}
