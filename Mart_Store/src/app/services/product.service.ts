import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { produits } from '../models/interface-produits';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _storage: Storage | null = null;
  private PRODUCTS_KEY = 'products';
  private seedProducts: produits[] = [
    {
      id: 1,
      titre: 'Stylo',
      description: 'Stylo de qualité pour usage scolaire et professionnel.',
      prix: 1500,
      date_creation: new Date(),
      ville: 'Yaoundé',
      etat: 'neuf',
      categorie: 'Fournitures scolaires',
      etoiles: 4,
      disponibilite: { disponible: true, type: 'livraison', frais_livraison: 500 },
      images: ['assets/produits/stylo-bleu.jpeg', 'assets/produits/traceuse.jpeg']
    },
    {
      id: 2,
      titre: 'Calculatrice',
      description: 'Calculatrice scientifique idéale pour les élèves et étudiants.',
      prix: 8000,
      date_creation: new Date(),
      ville: 'Yaoundé',
      etat: 'neuf',
      categorie: 'Fournitures scolaires',
      etoiles: 5,
      disponibilite: { disponible: true, type: 'livraison', frais_livraison: 500 },
      images: ['assets/produits/Calculatrice.jpeg', 'assets/produits/ciseau.jpeg']
    },
    {
      id: 3,
      titre: 'Cahier A4',
      description: 'Cahier A4 de 200 pages, couverture rigide.',
      prix: 2500,
      date_creation: new Date(),
      ville: 'Douala',
      etat: 'neuf',
      categorie: 'Fournitures scolaires',
      etoiles: 3,
      disponibilite: { disponible: true, type: 'livraison', frais_livraison: 500 },
      images: ['assets/produits/cahier-A4.jpeg']
    }
  ];

  constructor(private storage: Storage) { this.init(); }

  async init() {
    const s = await this.storage.create();
    this._storage = s;
    const existing = await this._storage.get(this.PRODUCTS_KEY);
    if (!existing || (Array.isArray(existing) && existing.length === 0)) {
      // seed initial products so the home page is not empty
      await this._storage.set(this.PRODUCTS_KEY, this.seedProducts.slice());
    }
  }

  async getProducts(): Promise<produits[]> {
    return (await this._storage?.get(this.PRODUCTS_KEY)) || [];
  }

  async addProduct(p: produits) {
    const list = await this.getProducts();
    list.unshift(p);
    await this._storage?.set(this.PRODUCTS_KEY, list);
  }

  async saveProducts(list: produits[]) {
    await this._storage?.set(this.PRODUCTS_KEY, list);
  }
}
