import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProcessoService } from 'src/app/service/processo.service';
import { SideNavService } from 'src/app/service/side-nav.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  processoForm = this.formBuilder.group({
    numeroProcesso: ['', [Validators.required, Validators.minLength(4)]],
    descricao: ['', Validators.required]
  });

  private idProcesso: number;

  private loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private processoService: ProcessoService,
    private sidenavService: SideNavService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sidenavService.open();

    this.route.params.subscribe(routeParams => {
      this.idProcesso = routeParams.id;
      this.processoService.getProcessoById(this.idProcesso).subscribe(
        res => {
          this.form.numeroProcesso.setValue(res.numeroProcesso);
          this.form.descricao.setValue(res.descricao);
          this.loading = false;
        },
        error => {
          if(error.status != 403){
            this.toastr.error('Erro ao buscar o processo para edição!');
          }
        }
      )
    });
  }

  get form() {
    return this.processoForm.controls;
  }

  onSubmit() {
    if (this.processoForm.invalid) {
      return;
    }

    this.processoService.alterarProcesso(this.idProcesso, this.processoForm.value).subscribe(
      res => {
        this.processoService.atualizarProcessos();
        this.sidenavService.close();
        this.toastr.success('Usuário cadastrado com sucesso');
      },
      error => {
        console.log(error);
        this.toastr.error('Erro ao salvar o usuário, tente novamente!');
      }
    );
  }

}
