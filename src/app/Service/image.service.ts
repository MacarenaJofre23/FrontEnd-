import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = "";

  constructor(private storage: Storage) { }

    public uploadImage($event: any, nombreImagen: string){
      const archivo = $event.target.files[0]
      const imagenRef = ref(this.storage, `imagen/`+ nombreImagen)
      uploadBytes(imagenRef, archivo)
      .then(response => {this.getImage()})
      .catch(error => console.log(error))
    }
    getImage(){
      const imagenRef = ref(this.storage, 'imagen')
      list(imagenRef)
      .then(async response => {
        for(let item of response.items){
          this.url = await getDownloadURL(item);
          console.log("la URL es: " + this.url);
        }
      })
      .catch(error => console.log(error))
    }
}
