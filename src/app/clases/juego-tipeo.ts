import { Juego } from '../clases/juego'

export class JuegoTipeo extends Juego {
  facil:Array<string>=['ropa','escuela','cocina','remera','perro','gato','tortuga','comida','leon','tiger','caballo','pez','luz','agua','juego'];
dificil:Array<string>=['Peyorativo','Misantropia','Hipofisis','Hipotalamo','Ventriculo','Esclerosis','Necrosis','Isquemia','Filantropia','Epilepsia','Anticonstitucional','Electromagnetismo','Carbonificacion','Electrocardiograma ','Calefaccion','Suprimir'];
palabra:string;
ingreso='';
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Tipeo",gano,jugador);
      }

      generarPalabra(dif:string):string{
        
        switch (dif) {
          case 'Facil':
          this.palabra= this.facil[Math.floor(Math.random()*this.facil.length)];
            break;
          case 'Dificil':
          this.palabra= this.dificil[Math.floor(Math.random()*this.dificil.length)];
          break;
      }
      return this.palabra;
      }

      public verificar() {
        if (this.ingreso === this.palabra) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
}
