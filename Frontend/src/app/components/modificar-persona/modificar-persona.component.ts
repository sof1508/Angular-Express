import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/entities/persona';
import { NewServiceService } from 'src/app/services/new-service.service';
import { ListarPersonaComponent } from '../listar-persona/listar-persona.component';

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})
export class ModificarPersonaComponent implements OnInit {
  modificarPersonaForm : FormGroup;
 

  constructor(private newService: NewServiceService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ListarPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {persona: Persona}) {
    this.modificarPersonaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required,Validators.minLength(3)]),
      edad: new FormControl('', [Validators.required,Validators.pattern("^(0?[0-9]?[0-9]|1[01][0-9]|12[0-5])$")]),
      dni: new FormControl('', [Validators.required, Validators.pattern("[0-9]{8}[A-Za-z]{1}")]),
      cumpleanyos: new FormControl('', Validators.required),
      color: new FormControl('',[ Validators.required, Validators.minLength(3)]),
      sexo: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.updateForm(this.data.persona);
  }

  ngAfterViewInit() {
    
  }

  onSubmit(): void{
    // Si el form es válido
    if(this.modificarPersonaForm.valid){
      // Llamamos al servicio para crear una persona
      this.newService.modificarPersona(this.data.persona._id, {
        Nombre: this.modificarPersonaForm.value.nombre,
        Apellidos: this.modificarPersonaForm.value.apellidos,
        Edad: this.modificarPersonaForm.value.edad,
        Dni: this.modificarPersonaForm.value.dni,
        Cumpleanyos: this.modificarPersonaForm.value.cumpleanyos,
        Color: this.modificarPersonaForm.value.color,
        Sexo: this.modificarPersonaForm.value.sexo,
      }).subscribe(
        res => {
          // Mensaje de confirmación de creación
          this._snackBar.open("Usuario modificado correctamente","Descartar");
  
          // Limpiamos y salimos
          this.modificarPersonaForm.reset();
          this.dialogRef.close();
         
        }, (error) => {
        // Mensaje de error de creación
          this._snackBar.open("Ha ocurrido un error","Descartar");
        }
      )
    }    
  }

  onCancelar(){
    // Cerramios dialogo
    this.dialogRef.close();
  }

  // Cargamos los field con los datos obtenidos de la tabla
  updateForm(persona: Persona){
    this.modificarPersonaForm.setValue({
      nombre: persona.Nombre,
      apellidos: persona.Apellidos,
      edad: persona.Edad,
      dni: persona.Dni,
      cumpleanyos: persona.Cumpleanyos,
      color: persona.Color,
      sexo: persona.Sexo
    })
  }


}
