package com.proj.models;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Produit {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String nomprod;
	private float prix;
	private String image;
	private String descrip;
	private String categorie;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	@Temporal(TemporalType.DATE)
	private Date dateajout;
	
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
                ", Date dajout='" + this.dateajout + '\'' +
                '}';
    }
	public Date getDateajout() {
		return dateajout;
	}
	public void setDateajout() {
		this.dateajout=new Date();
	}
	
	
}
