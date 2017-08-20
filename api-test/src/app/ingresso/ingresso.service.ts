import { Injectable, Injector } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptionsArgs
} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class IngressoService {

  url: string = "";
  authToken: string = "";

  constructor(private http: Http) {
  }

  findByEventoId(eventoId: String, onlyNotSync: boolean, limit: number, offset: number): Observable<any> {

    let myHeaders = new Headers();
    myHeaders.append('cache-control', 'no-cache');

    let myParams = {
      'authToken': this.authToken,
      'eventoId': eventoId,
      'ingressoId': '',
      'onlyNotSync': onlyNotSync,
      'limit': limit,
      'offset': offset
    };

    let inData = { headers: myHeaders, params: myParams };

    return this.http.put(this.url, {}, inData).map(function (res) {
      return res.json();
    });

  }



}
