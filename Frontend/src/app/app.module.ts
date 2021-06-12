import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Componentes
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';

// Servicios
import { NewServiceService } from './services/new-service.service';
import { ModificarPersonaComponent } from './components/modificar-persona/modificar-persona.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListarPersonaComponent,
    ModificarPersonaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    NewServiceService
  ],
  bootstrap: [AppComponent],
  entryComponents:[CrearPersonaComponent]
})
export class AppModule { }
