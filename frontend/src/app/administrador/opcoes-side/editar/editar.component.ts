import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  
  nomeForm = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  private id: number;

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private sideNavService: SideNavService 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.usuarioService.getUsuarioById(routeParams.id).subscribe(res => {
        this.nomeForm.setValue(res.nome);
        this.id = res.id;
      }, error => {
        console.log(error);
        this.toastr.error('Erro ao buscar o usuário para edição!');
      });
    });
  }

  salvar() {
    if (this.nomeForm.valid) {
      this.usuarioService
        .alterarUsuario(this.id, new UsuarioModel(this.id, this.nomeForm.value))
        .subscribe(res => {
          this.sideNavService.close();
          this.usuarioService.atualizarUsuarios();
          this.toastr.success('Usuário alterado com sucesso');
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
