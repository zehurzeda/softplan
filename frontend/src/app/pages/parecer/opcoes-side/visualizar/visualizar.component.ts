import { ParecerService } from './../../../../service/parecer.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ParecerDtoModel } from 'src/app/model/parecer-dto.model';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  
  private pareceres: ParecerDtoModel[] = []
  
  private loading: boolean = true;

  constructor(
    private parecerService: ParecerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.parecerService.getAllByParecerProcessoId(routeParams.id).subscribe(res => {
        this.pareceres = res;
        this.loading = false;
      })
    });
  }
}
