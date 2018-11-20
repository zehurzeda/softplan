import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { SideNavService } from 'src/app/service/side-nav.service';
import { RoleModel } from 'src/app/model/role.model';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  private roles: RoleModel[] = [];

  usuarioForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: [''],
    roles: ['', Validators.required]
  });

  private id: number;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private roleService: RoleService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private sideNavService: SideNavService
  ) {}

  get form() {
    return this.usuarioForm.controls;
  }

  compareFn(user1: RoleModel, user2: RoleModel) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(res => {
      this.roles = res;
    });

    this.route.params.subscribe(routeParams => {
      this.usuarioService.getUsuarioById(routeParams.id).subscribe(
        res => {
          this.form.nome.setValue(res.nome);
          this.form.email.setValue(res.email);
          this.form.roles.setValue(res.roles);
          this.id = res.id;
        },
        error => {
          if(error.status != 403){
            this.toastr.error('Erro ao buscar o usuário para edição!');
          }
        }
      );
    });
  }

  onSubmit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.usuarioService
      .alterarUsuario(this.id, this.usuarioForm.value)
      .subscribe(
        res => {
          this.usuarioForm.reset();
          this.usuarioService.atualizarUsuarios();
          this.sideNavService.close();
          this.toastr.success('Usuário editado com sucesso');
        },
        error => {
          if(error.status != 403){
            this.toastr.warning('Erro ao editar o usuário!');
          }
        }
      );
  }
}
