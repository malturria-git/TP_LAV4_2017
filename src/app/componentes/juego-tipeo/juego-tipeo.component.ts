import { Component, OnInit, Renderer } from '@angular/core';
import { Input } from '@angular/core';
import { JuegoTipeo } from '../../clases/juego-tipeo';
//Observable para el timer 
import { Observable } from 'rxjs/Rx';
//para el focus
import { Renderer2 } from '@angular/core';

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

  constructor( public renderer: Renderer2) { 
    this.nuevoJuego = new JuegoTipeo();
  }
  
  ngOnInit() {
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>this.segundos = t);
  }

  iniciarJuego(dif:string){
        //para el reinicio
        this.reiniciar=false;
        this.segundos=0;
    //inicio
    this.palabra=this.nuevoJuego.generarPalabra(dif);
    this.ocultaInstrucciones=true;
    //timer
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>this.segundos = t);
    //focus
    this.inputPalabra =  this.renderer.selectRootElement('#inputPalabra');
    setTimeout(() => this.inputPalabra.focus(), 0);

 }

juega(){
  if (this.nuevoJuego.verificar()){
   // this.enviarJuego.emit(this.nuevoJuego);
   // this.MostarMensaje("Sos un Genio!!!",true);
   this.MostarMensaje("Bien hecho!! Tardaste "+this.segundos+" segundos, la proxima lo haces mejor");
   this.reiniciar=true;
   
}else{
  this.MostarMensaje("Sigue intentando, pasa el tiempo!");
  setTimeout(() => this.inputPalabra.focus(), 0);
}
}

MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
  this.Mensajes=mensaje;    
  var x = document.getElementById("snackbar");
  if(ganador)
    {
      x.className = "show Ganador";
    }else{
      x.className = "show Perdedor";
    }
  var modelo=this;
  setTimeout(function(){ 
    x.className = x.className.replace("show", "");

   }, 3000);
  console.info("objeto",x);

 }  }