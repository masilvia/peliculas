import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama'},
    { id: 2, nombre: 'Acción'},
    { id: 3, nombre: 'Comedia'},
  ]

  peliculas = [
    {titulo: 'Spider-Man: Far from Home', enCines: false, proximosEstrenos:true, generos: [1,2], poster:'	https://http2.mlstatic.com/D_NQ_NP_729934-MLA42963890145_072020-O.webp'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges
    .subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
    })
  }

  buscarPeliculas(valores:any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

  }

   limpiar(){
     this.form.patchValue(this.formularioOriginal);    
  }

}
