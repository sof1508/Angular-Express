import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Persona } from 'src/app/entities/persona';
import { NewServiceService } from 'src/app/services/new-service.service';
import { CrearPersonaComponent } from '../crear-persona/crear-persona.component';
import { ModificarPersonaComponent } from '../modificar-persona/modificar-persona.component';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['Nombre', 'Apellidos', 'Edad', 'Dni','Cumpleaños','Color Favorito','Sexo','actions'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private newService: NewServiceService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    // Añadir personas
    this.newService.crearPersona(new Persona("Raúl","Lorenzo",32,"12345678j",new Date(1995,11,2),"Rojo","Hombre"));
    this.newService.crearPersona(new Persona("Miguel","Cervantes",46,"12375679j",new Date(1945,4,23),"Morado","Hombre"));

    // Cargar lista de personas en la tabla
    this.newService.listarPersonas().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as Persona[]);
      }
    );
  }


  ngAfterViewInit() {
    //Cargar plugins
    this.updatePlugins();
  }


  onCreate(){
    // Configuració del dialogo
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // Abrimos dialogo
    this.dialog.open(CrearPersonaComponent, dialogConfig).afterClosed().subscribe(()=>{
      this.listarPersonas(); // Cuando se cierra actualizamos la tabla
      this.updatePlugins();
    });
  }

  onEdit(persona: Persona){
    // Configuració del dialogo
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //Abrimos dialogo
    this.dialog.open(ModificarPersonaComponent, {
      disableClose: true,
      autoFocus: true,
      data:{persona}
    }).afterClosed().subscribe(()=>{
      this.listarPersonas(); // Cuando se cierra actualizamos la tabla
      this.updatePlugins();
    });
  }

  onDelete(persona: Persona){
    // Borrar persona
    this.newService.borrarPersona(persona.Id);
    
    //Actualizar la tabla
    this.listarPersonas();
    this.updatePlugins();
  }

  updatePlugins(){
    //Puesta en marcha del sort y paginator
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }


  listarPersonas() {
    // Cargar lista de personas en la tabla
    this.newService.listarPersonas().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as Persona[]);
      }
    );
  }

}
