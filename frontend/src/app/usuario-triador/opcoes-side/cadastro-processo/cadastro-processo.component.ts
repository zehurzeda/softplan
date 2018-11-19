import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { ProcessoService } from './../../../service/processo.service';
import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-cadastro-processo',
  templateUrl: './cadastro-processo.component.html',
  styleUrls: ['./cadastro-processo.component.scss']
})
export class CadastroProcessoComponent implements OnInit {
  processoForm = this.formBuilder.group({
    numeroProcesso: ['', [Validators.required, Validators.minLength(4)]],
    descricao: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private processoService: ProcessoService,
    private sidenavService: SideNavService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.sidenavService.open();
  }

  get form() {
    return this.processoForm.controls;
  }

  onSubmit() {
    if (this.processoForm.invalid) {
      return;
    }

    this.processoService.salvarProcesso(this.processoForm.value).subscribe(
      res => {
        this.processoForm.reset();
        this.processoForm.markAsPristine();
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
