import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { produits } from 'src/app/models/interface-produits';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false,
})
export class AddProductPage {
  titre = '';
  description = '';
  prix: number = 0;
  ville = '';
  categorie = '';
  etat = 'neuf';
  images: string[] = [];
  disponibiliteType = 'magasin';
  fraisLivraison = 0;
  etoiles = 0;

  constructor(private nav: NavController, private productService: ProductService) {}

  async onFilesChange(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const base64 = await this.readFileAsBase64(file);
      this.images.push(base64 as string);
    }
  }

  readFileAsBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  async submit() {
    const prod: produits = {
      id: Date.now(),
      titre: this.titre,
      description: this.description,
      prix: this.prix,
      date_creation: new Date(),
      ville: this.ville,
      etat: this.etat,
      categorie: this.categorie,
      etoiles: 0,
      disponibilite: { disponible: true, type: this.disponibiliteType, frais_livraison: this.fraisLivraison },
      images: this.images
    };
    await this.productService.addProduct(prod);
    this.nav.navigateRoot('/home');
  }
}
