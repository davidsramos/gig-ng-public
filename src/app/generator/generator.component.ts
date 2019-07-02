import { GeneratorService } from './../services/generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit, OnDestroy {

  public charGrid = [];
  public repeatChar;
  public genCode;
  public unsub01: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.repeatChar = '';
    this.charGrid = this.generatorService.globalCharMatrix;

    this.unsub01 = this.generatorService.generatedCodeChange
      .subscribe(
      (genCode) => {
        this.genCode = genCode;
      });
  }

  ngOnDestroy() {
    this.unsub01.unsubscribe();
  }

  public generateGrid() {

    this.charGrid = [];

    for (let index = 0; index < 10; index++) {
      const charArray = [];
      for (let index2 = 0; index2 < 10; index2++) {
        const char = this.getRandomChar();
        charArray.push(char);
      }
      this.charGrid.push(charArray);
    }

    if (this.repeatChar !== '') {
        this.randomModifyGrid();
    }

    this.generatorService.globalCharMatrix = this.charGrid;
    this.generatorService.startCalcCode(this.charGrid);
  }

  private getRandomChar() {
    const randomCharacteres = 'abcdefghijklmnopqrstuvxkyz';
    const index = Math.floor(Math.random() * (randomCharacteres.length));
    const randomChar = randomCharacteres.charAt(index);
    return randomChar;
  }

  private randomModifyGrid() {
    const randomLine = Math.floor(Math.random() * 10);
    const randomColumn = Math.floor(Math.random() * 10);
    const totalItens = this.generatorService.countItemMatrix(this.repeatChar, this.charGrid);
    const itemMatrix = this.charGrid[randomLine][randomColumn];

    if (totalItens < 20) {
      if (itemMatrix !== this.repeatChar) {
        this.charGrid[randomLine][randomColumn] = this.repeatChar;
      }
      this.randomModifyGrid();
    }
  }

}
