import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import { FeedProvider } from '../providers/feed/feed';
import { IonicStorageModule } from '@ionic/storage';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyBkdgoAo8qHyiuyQ6OKTtx39B5CDEnwe9Y",
  authDomain: "tumotoapp-189705.firebaseapp.com",
  databaseURL: "https://tumotoapp-189705.firebaseio.com",
  storageBucket: "tumotoapp-189705.appspot.com",
  messagingSenderId: "268308320043"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //FeedProvider,
    //InAppBrowser
  ]
})
export class AppModule {}
