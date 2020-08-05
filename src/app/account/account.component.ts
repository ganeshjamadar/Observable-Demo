import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    console.log('Account ngOnInit');
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  onActivate(){
    this.accountService.accountActivated.next(this.id);
    // this.accountService.accountActivated.subscribe(
    //   (id : number) =>{
    //     if(id === 1){
    //       console.log('ID: '+ id)
    //     }
    //     else if(id === 2){
    //       console.log('ID: '+ id)
    //     }
    //   }
    // );
  }
  

}
