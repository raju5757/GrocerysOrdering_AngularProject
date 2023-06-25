import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../service/buyer.service';
import { Router } from '@angular/router';
import { buyer } from '../model/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buyer: any = {};
  username: any;

  constructor(public buyerservice: BuyerService, public router: Router) { }

  ngOnInit(): void {
    var list = this.buyerservice.GetBuyeresList();
    console.log('this is the data we got:' + list);
  }

  clearForm() {
    this.buyer = {}
  }

  registerBuyer() {
    this.buyerservice.createBuyer(this.buyer).subscribe(
      response => {

        console.log('Buyer registered successfully');
        this.clearForm();
      },
      error => {
        
        console.error('Failed to register buyer', error);
      }
    );
  }

  login() {
    console.log(this.username);
    this.buyerservice.verifyuser(this.username).subscribe(
      (data) => {
        console.log(JSON.stringify(data));

        if (data.id == 0) {
          alert('User does not exist');
        } else {
          this.router.navigate(['dashboard']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
