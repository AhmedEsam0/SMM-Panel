import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface WalletBtn {
  icon: string;
  title: string;
  hint: string;
}
@Component({
  selector: 'app-wallet',
  imports: [CommonModule],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css',
})
export class Wallet {
  btns: WalletBtn[] = [
    {
      icon: 'fa-solid fa-plus hintBg-1 hint-1',
      title: 'Add Funds',
      hint: 'Deposite Money to Wallet',
    },
    {
      icon: 'fa-solid fa-arrow-down hintBg-2 hint-2',
      title: 'Withdraw',
      hint: 'Transfer Funds to Bank Account',
    },
    {
      icon: 'fa-solid fa-right-left hintBg-3 hint-3',
      title: 'Transfer Balance',
      hint: 'Send to Another User',
    },
  ];
}
