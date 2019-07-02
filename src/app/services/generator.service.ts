import { PaymentsModel } from './../payments/payments.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  public globalCharMatrix = [];
  public prevNowPlaying = null;
  public calculatedCode = null;
  public generatedCodeChange: Subject<string> = new Subject<string>();
  public payments: Array<PaymentsModel>;

  constructor() { }

  public countItemMatrix(item, charGrid) {
    let totalCount = 0;
    for (let index = 0; index < 10; index++) {
      const count = charGrid[index].filter((obj) => obj === item).length;
      totalCount += count;
    }
    return totalCount;
  }

  public startCalcCode(charGrid) {
    const _this = this;

    if (this.prevNowPlaying) {
      clearInterval(this.prevNowPlaying);
    }

    this.globalCharMatrix = charGrid;
    this.generateCode();

    this.prevNowPlaying = setInterval(function () {
      _this.generateCode();
    }, 2000);
  }

  public generateCode() {
    const dateObj = new Date();
    const secondsNow = dateObj.getSeconds().toString();
    let index01 =  parseInt(secondsNow.charAt(0), 10);
    let index02 =  parseInt(secondsNow.charAt(1), 10);

    if (isNaN(index02)) {
      index02 = index01;
      index01 = 0
    }

    const char01 = this.globalCharMatrix[index01][index02];
    const char02 = this.globalCharMatrix[index02][index01];
    const qdtChar01 = this.roundNumberHighNine(this.countItemMatrix(char01, this.globalCharMatrix));
    const qdtChar02 = this.roundNumberHighNine(this.countItemMatrix(char02, this.globalCharMatrix));
    this.calculatedCode = parseInt(qdtChar01 + '' + qdtChar02, 10);
    this.generatedCodeChange.next(this.calculatedCode);
  }

  public roundNumberHighNine(number) {
    if (+number > 9) {
      number = Math.round((+number / 3));
    }
    return number;
  }

}
