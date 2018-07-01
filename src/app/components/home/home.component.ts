import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    spotify.getNewRealeses().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorSpotify: any ) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorSpotify.error.error.message;
    });

   }
}
