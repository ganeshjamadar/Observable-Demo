import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, Observer, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myNumberObsSubscriprtion: Subscription;
  myCustomeObsSubscriprtion: Subscription;

  constructor(){

  }
  
  ngOnInit(){
    console.log('Home ngOnInit');
    const number = of(1,2,3,4,5);

    const myNumbers = interval(1000);

    this.myNumberObsSubscriprtion = myNumbers.subscribe(
      (number : number) =>{
        console.log(number)
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('First package!');
        }, 2000);
        setTimeout(() => {
          observer.next('Second package!');
        }, 4000);
        // setTimeout(() => {
        //   observer.error('This does not work!');
        // }, 5000);
        setTimeout(() => {
          observer.next('Third package!');
        }, 5000);
        setTimeout(() => {
          observer.complete();
        }, 6000);
        setTimeout(() => {
          observer.next('Fourth package!');
        }, 7000);
      }
    );
    
    this.myCustomeObsSubscriprtion = myObservable.subscribe(
      (data: string ) => {
        console.log(data)
      },
      (error: string ) => {
        console.log(error)
      },
      () => {
        console.log('Complete!')
      }
    );
    
  }

  ngOnDestroy(){
    this.myNumberObsSubscriprtion.unsubscribe();
    this.myCustomeObsSubscriprtion.unsubscribe();
  }
}
