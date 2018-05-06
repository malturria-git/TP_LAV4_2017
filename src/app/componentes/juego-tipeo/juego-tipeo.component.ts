import { Component, OnInit, Renderer,OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { JuegoTipeo } from '../../clases/juego-tipeo';
// Observable para el timer 
import { Observable } from 'rxjs/Rx';
// para el focus
import { Renderer2 } from '@angular/core';
// material
import {MatSnackBar} from '@angular/material';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-juego-tipeo',
  templateUrl: './juego-tipeo.component.html',
  styleUrls: ['./juego-tipeo.component.css']
})

export class JuegoTipeoComponent implements OnInit {
palabra:string='';
tamaño:number;
segundos: number=0;
ocultaInstrucciones:boolean=false;
nuevoJuego: JuegoTipeo;
Mensajes:string;
inputPalabra:any;
reiniciar:boolean=false;
timer:any;
private subscription: Subscription;

  constructor( public renderer: Renderer2,public snackBar: MatSnackBar) { 
    this.nuevoJuego = new JuegoTipeo();
  }
  /////////////////////////////////
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  iniciarJuego(dif:string){
    //para el reinicio
    

    this.timer = TimerObservable.create(0, 1000);
    this.subscription = this.timer.subscribe(t => {
      this.segundos = t;
    });
    this.reiniciar=false;
    this.segundos=0;
    //inicio
    this.palabra=this.nuevoJuego.generarPalabra(dif);
    this.ocultaInstrucciones=true;

    //focus
    this.inputPalabra =  this.renderer.selectRootElement('#inputPalabra');
    console.log(this.timer);
    setTimeout(() => this.inputPalabra.focus(), 0);
    setTimeout(() => this.inputPalabra = ' ');
    }

  juega(){
    console.log(this.segundos);
    if (this.nuevoJuego.verificar()){
      this.snackBar.open("Bien hecho!! Tardaste "+this.segundos+" segundos, la proxima lo haces mejor", '', {duration: 3000});
      this.reiniciar=true;
      this.segundos=0;
      if(this.subscription)
    this.subscription.unsubscribe();
      } else {
      this.snackBar.open("Sigue intentando, pasa el tiempo", '', {duration: 3000});
      this.inputPalabra =  this.renderer.selectRootElement('#inputPalabra');
      setTimeout(() => this.inputPalabra.focus(), 0);
      } 
  }

}