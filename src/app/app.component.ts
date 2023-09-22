import { Component } from '@angular/core';


interface Mostrar{
id:number,
motivo:string,
cantidad:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


tipo:string = "+";
motivo:string = "";
cantidad:number = 0;
ingreso:number =0; 
gasto:number = 0;
balance:number = this.ingreso-this.gasto;
porcentaje:number =0;

IngresosMotivos:Mostrar[] = [{id:1,motivo:'Venta',cantidad:2003},{id:1,motivo:'terreno',cantidad:2300}];
gastosMotivos:Mostrar[] = [{id:1,motivo:'pasaje',cantidad:203},{id:1,motivo:'laptop',cantidad:2300}]; 


constructor(){
this.ingreso = 0;
this.IngresosMotivos.forEach(e =>{
this.ingreso +=e.cantidad;
})

this.gasto = 0;
this.gastosMotivos.forEach(e =>{
this.gasto +=e.cantidad;

this.balance = this.ingreso-this.gasto;
})


}

eliminarIngreso(item:Mostrar){
this.IngresosMotivos = this.IngresosMotivos.filter(x => x!=item);
this.ingreso = 0;
this.IngresosMotivos.forEach(e =>{
this.ingreso +=e.cantidad;
})

this.balance = this.ingreso-this.gasto;
this.porcentaje=Math.round((this.gasto/ this.ingreso) * 100)
}

eliminarGasto(item:Mostrar){
this.gastosMotivos = this.gastosMotivos.filter(x => x!=item);
this.gasto = 0;
this.gastosMotivos.forEach(e =>{
this.gasto +=e.cantidad;
})
this.balance = this.ingreso-this.gasto;
this.porcentaje=Math.round((this.gasto/ this.ingreso) * 100)
}



agregar()
{

if(this.tipo == '+'){
this.IngresosMotivos.push({
id:this.IngresosMotivos.length+1,
motivo:this.motivo,
cantidad:this.cantidad
})
}

if(this.tipo == '-'){
this.gastosMotivos.push({
id:this.gastosMotivos.length+1,
motivo:this.motivo,
cantidad:this.cantidad
})
}

this.ingreso = 0;
this.IngresosMotivos.forEach(e =>{
this.ingreso +=e.cantidad;
})

this.gasto = 0;
this.gastosMotivos.forEach(e =>{
this.gasto +=e.cantidad;
})

this.balance = this.ingreso-this.gasto;
this.porcentaje=Math.round((this.gasto/ this.ingreso) * 100)
}




}
