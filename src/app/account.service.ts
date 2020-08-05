import { Subject } from 'rxjs';

export class AccountService{

    public accountActivated = new Subject<number>();
}