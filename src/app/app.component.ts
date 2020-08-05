import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  id: number;
  account1Activated = false;
  account2Activated = false;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute){

  }

  
  ngOnInit(){
    console.log('ngOnInit');
    const sub = new Subject<string>();
    sub.subscribe(
      (data: string) => {
        console.log('Subject Data: '+ data);
      }
    );

    sub.next("From Subject");
    sub.next("To Subject");

    this.accountService.accountActivated.subscribe(
      (id: number ) =>{
        if(id === 1){
          this.account1Activated = true;
        }
        else if(id === 2){
          this.account2Activated = true;
        }
      }
    );

    this.accountService.accountActivated.subscribe(
      (id: number ) =>{
        if(id === 1){
          this.account1Activated = true;
        }
        else if(id === 2){
          this.account2Activated = true;
        }
      }
    );
    
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = params['id'];
    //     if(this.id === 1){
    //       this.account1Activated = true;
    //     } else if(this.id === 2) {
    //       this.account2Activated = true;
    //     }
    //   }
    // );
  }
}
