import { GeneratorService } from './../services/generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaymentsModel } from './payments.model';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy  {

  public unsub01: Subscription;
  public arrPaymentsModel: Array<PaymentsModel>;
  public genCode;
  public payment;
  public amount;

  constructor(
    private generatorService: GeneratorService
    ) { }

  ngOnInit() {
    this.genCode = this.generatorService.calculatedCode;
    this.unsub01 = this.generatorService.generatedCodeChange
      .subscribe(
      (genCode) => {
        this.genCode = genCode;
      });

    this.arrPaymentsModel = this.generatorService.payments;

    if(!this.arrPaymentsModel) {
      this.arrPaymentsModel = new Array<PaymentsModel>();
    }

  }

  ngOnDestroy() {
    this.unsub01.unsubscribe();
  }

  public addPayments() {
    const payment = new PaymentsModel();
    payment.payment = this.payment;
    payment.amount = this.amount;
    payment.code = this.genCode;
    payment.grid = this.generatorService.globalCharMatrix.slice();

    this.arrPaymentsModel.push(payment);
    this.generatorService.payments = this.arrPaymentsModel.slice();
    this.reset();
  }

  public reset() {
    this.payment = null;
    this.amount = null;
  }

}
