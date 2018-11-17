import { UsuarioModel } from 'src/app/model/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  nomeForm = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  salvar() {
    if (this.nomeForm.valid) {
      this.usuarioService
        .salvarUsuario(new UsuarioModel(null, this.nomeForm.value))
        .subscribe(res => {
          this.nomeForm.reset();
          this.usuarioService.atualizarUsuarios();
          this.toastr.success('Usuário cadastrado com sucesso');
        },
        error => {
          console.log(error);
          this.toastr.error('Erro ao salvar o usuário, tente novamente!');
        });
    } else {
      this.nomeForm.markAsTouched();
    }
  }
}
