import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-albuns-listagem',
  templateUrl: './albuns-listagem.component.html',
  styleUrls: ['./albuns-listagem.component.css']
})
export class AlbunsListagemComponent implements OnInit {

  albuns: any[];
  totalRegistros = 0;
  showLoader = false;

  constructor(
    private albunsService: AlbumService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Listagem de albuns');
    //this.carregarImagens();
    this.listarAlbuns();
  }
  

  /**
   * Modelo utilizando subscribe
   */
  listarAlbuns() {
    this.showLoader = true;
    this.albunsService.listarAlbuns()
        .subscribe(resp => {
          this.albuns = resp;
          this.totalRegistros = resp.length;
          this.showLoader = false;
        });
  }

   /**
   * Modelo utilizando subscribe
   */
  listarMais() {
    this.showLoader = true;
    this.albunsService.listarAlbuns()
        .subscribe(resp => {          
          this.totalRegistros += resp.length;
          this.showLoader = false;

          resp.forEach(element => {
            this.albuns.push(element);
          });

        });
  }

   /**
   * Modelo utilizando Promise
   */
  carregarImagens() {
    console.log("Adicionando imagens...");
    this.showLoader = true;
    this.albunsService.listarTodos()
      .then(resultado => {      
        this.totalRegistros = resultado.length;
        this.albuns = resultado;
        this.showLoader = false;
      })
      .catch(erro => {
        console.log(erro);
      })
  }

   /**
   * Modelo utilizando Promise
   */
  carregarMais() {
    this.showLoader = true;
    this.albunsService.listarTodos()
    .then(resultado => {        
      this.totalRegistros += resultado.length;     
      this.showLoader = false;    

      resultado.forEach(element => {
        this.albuns.push(element);
      });
      
    })
    .catch(erro => {
      console.log(erro);
    })
  }

}

