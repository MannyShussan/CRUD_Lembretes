import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CardAnotacaoComponent } from './shared/card-anotacao/card-anotacao.component';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { FormAnotacaoComponent } from './shared/form-anotacao/form-anotacao.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './shared/form-input/form-input.component';
import { FormTextAreaComponent } from './shared/form-text-area/form-text-area.component';
import { ModalDeletarComponent } from './shared/modal-deletar/modal-deletar.component';
import { ThemeService } from './core/services/theme/theme.service';
import { ThemeManagerComponent } from './shared/theme-manager/theme-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAnotacaoComponent,
    ContainerComponent,
    HomeComponent,
    FormAnotacaoComponent,
    CabecalhoComponent,
    FormInputComponent,
    FormTextAreaComponent,
    ModalDeletarComponent,
    ThemeManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
