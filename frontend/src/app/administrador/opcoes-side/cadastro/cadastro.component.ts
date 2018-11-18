import { RoleModel } from './../../../model/role.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  private roles: RoleModel[] = [];

  usuarioForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    roles: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(res => {
      this.roles = res;
    });
  }
  
  get form() {
    return this.usuarioForm.controls;
  }

  onSubmit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.usuarioService
      .salvarUsuario(this.usuarioForm.value)
      .subscribe(res => {
        this.usuarioForm.reset();
        this.usuarioForm.markAsPristine();
        this.usuarioService.atualizarUsuarios();
        this.toastr.success('Usuário cadastrado com sucesso');
      },
      error => {
        console.log(error);
        this.toastr.error('Erro ao salvar o usuário, tente novamente!');
      });
  }
}
