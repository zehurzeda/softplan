import { UsuarioParecerProcessoModel } from './../../../../model/usuario-parecer-service.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SideNavService } from 'src/app/service/side-nav.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioParecerProcessoService } from 'src/app/service/usuario-parecer-processo.service';
import { ParecerService } from 'src/app/service/parecer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  parecerForm = this.formBuilder.group({
    parecer: ['', [Validators.required, Validators.minLength(4)]]
  });

  private idProcesso: number;

  constructor(
    private formBuilder: FormBuilder,
    private parecerService: ParecerService,
    private sidenavService: SideNavService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private usuarioParecerProcessoService: UsuarioParecerProcessoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.idProcesso = routeParams.id;
    });

    this.sidenavService.open();
  }

  get form() {
    return this.parecerForm.controls;
  }


  onSubmit() {
    if (this.parecerForm.invalid) {
      return;
    }

    this.parecerService.salvarParecer(this.idProcesso, this.parecerForm.value).subscribe(
      res => {
        this.usuarioParecerProcessoService.atualizarProcessosPendentes();
        this.sidenavService.close();
        this.toastr.success('Parecer cadastrado com sucesso');
      },
      error => {
        console.log(error);
        this.toastr.error('Erro ao salvar o Parecer, tente novamente!');
      }
    );
  }

}
