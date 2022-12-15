import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck,AfterViewInit{

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  @Input()
  titulo: string;

  @ViewChild(RatingComponent)
  ratingComponent:RatingComponent;

  timer: ReturnType<typeof setInterval>;
  ngOnChanges(changes: SimpleChanges):void{
    console.log('on Changes');
    console.log(changes);


  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);

  }
  ngOnInit(): void {
    console.log('on init');
    this.timer=setInterval(()=>console.log(new Date),1000);

  }

  ngDoCheck(): void {
    console.log('on Do check');

  }
  ngAfterViewInit(): void {
    console.log('on after View Init');
    this.ratingComponent.ratingSeleccionado=4;
    this.changeDetectorRef.detectChanges();
  }
}
