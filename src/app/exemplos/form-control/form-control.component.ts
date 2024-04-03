import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {


  nome = new FormControl({ value:'',disabled:true},[Validators.required]);

  // habilita o log assim que iniciado com onInit
  ngOnInit(){
    console.log(this.nome);
  }

  mostrarStatus(){
    console.log(this.nome);
  }


  alterarValor() {
    this.nome.setValue('Alterado');
    }

  desabilitarInput() {
    this.nome.disable();
}
  habilitarInput() {
    this.nome.enable();
}


}
