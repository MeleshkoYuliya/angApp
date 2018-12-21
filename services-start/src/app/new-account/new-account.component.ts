import { Component } from '@angular/core';
import { LogginService } from '../loggin.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New status: ' + status),
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    // this.logginService.logStatusChange(accountStatus);
    // const service = new LogginService();
    // service.logStatusChange(accountStatus);
  }
}
