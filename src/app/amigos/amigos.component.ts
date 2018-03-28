import { Component, OnInit } from '@angular/core';
import { Amigo } from '../domain/amigo';
import { AMIGOS } from '../domain/mock-amigos';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {


  amigos : Amigo[] = AMIGOS;
  amigo : Amigo = new Amigo();

  constructor() { }

  ngOnInit() {
  }

addAmigo(){
  
  let novoAmigo = new Amigo();
  novoAmigo.id = this.amigo.id;
  novoAmigo.nome = this.amigo.nome;
  novoAmigo.dataNascimento = this.amigo.dataNascimento;
  this.amigos.push(novoAmigo);
  
  
  //console.log(this.amigo.nome);
}

}
