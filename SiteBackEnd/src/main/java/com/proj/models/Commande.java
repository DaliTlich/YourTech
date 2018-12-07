package com.proj.models;


import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Commande {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private float montant;
	private String typeLivraison;
	private Long[] produits;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy@HH:mm")
	@Temporal(TemporalType.DATE)
	private Date dateCommande;
	
	public Commande() {}
	
	public Commande(float montant, String typeLivraison, Long[] produits) {
		this.montant = montant;
		this.typeLivraison = typeLivraison;
		this.produits = produits;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long[] getProduits() {
		return produits;
	}
	public void setProduits(Long[] produits) {
		this.produits = produits;
	}
	public String getTypeLivraison() {
		return typeLivraison;
	}
	public void setTypeLivraison(String typeLivraison) {
		this.typeLivraison = typeLivraison;
	}
	public float getMontant() {
		return montant;
	}
	public void setMontant(float montant) {
		this.montant = montant;
	}
	public Date getDateCommande() {
		return dateCommande;
	}
	public void setDateCommande() {
		this.dateCommande=new Date();
	}
	
	
	@Override
	public String toString() {
		return "Commande [id=" + id + ", montant=" + montant + ", typeLivraison=" + typeLivraison + ", produits="
				+ Arrays.toString(produits) + ", dateCommande=" + dateCommande + "]";
	}
}
