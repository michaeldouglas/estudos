import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private CursosService: CursosService) {
    this.nomePortal = 'http://mdbaweb.com.br';

    this.cursos = this.CursosService.getCursos();
  }

  ngOnInit() {
  }

}
