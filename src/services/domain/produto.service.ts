import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient) {

  }

  findById(id : string) : Observable<ProdutoDTO> {
    return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${id}`);
  }

  findByCategoria(categoria_id : string, page : number = 0, linesPerPage : number = 24) : Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
  }
}
