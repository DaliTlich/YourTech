package controller;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Produit {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String nomprod;
	private float prix;
	private String image;
	private String descrip;
	private String categorie;
	
	public Produit() {}
	public Produit(String nomProd, float prix, String urlimage, String decrip, String categorie) {
		this.nomprod = nomProd;
		this.prix = prix;
		this.setImage(urlimage);
		this.descrip = decrip;
		this.categorie = categorie;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	public String getDecrip() {
		return descrip;
	}
	public void setDecrip(String decrip) {
		this.descrip = decrip;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNomProd() {
		return nomprod;
	}
	public void setNomProd(String nomProd) {
		this.nomprod = nomProd;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getImage() {
		return image;
	}
	public void setImage(String urlimage) {
		this.image = urlimage;
	}
	
	@Override
    public String toString() {
        return "Produit{" +
                "id=" + id +
                ", nom Produit ='" + this.nomprod + '\'' +
                ", prix='" + this.prix + '\'' +
                ", image url='" + this.image + '\'' +
                ", description='" + this.descrip + '\'' +
                ", categorie='" + this.categorie + '\'' +
                '}';
    }
	
	
}