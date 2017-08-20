import { Component, OnInit } from '@angular/core';

import { IngressoService } from "./ingresso.service";
import { Contrato } from "./model/Contrato";

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css']
})
export class IngressoComponent implements OnInit {

  eventoId: string = "";
  onlyNotSync: boolean = false;
  limit: number = 50;
  offset: number = 0;
  contratos: Contrato[] = [];

  constructor(private ingressoService: IngressoService) {

  }

  ngOnInit() {
    this.ingressoService.findByEventoId(this.eventoId, this.onlyNotSync, this.limit, this.offset)
      .subscribe(elements => {
        if (elements.data){
          elements.data.forEach(element => {
            this.contratos.push(new Contrato(element));
          });
        }else{
          alert(elements.msg);
        }
      }, err => console.log(err));
  }

}
