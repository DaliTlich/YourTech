package com.proj.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.proj.models.Produit;

@Repository
public interface ProduitRepository extends CrudRepository<Produit,Long> {
	@Query(
	        value = "SELECT * FROM produit t where t.categorie = :categorie", 
	        nativeQuery=true
	    )
	    public Iterable<Produit> findByCat(@Param("categorie") String categorie);
	
	@Query(
	        value = "SELECT * FROM produit t where MONTH(t.dateajout) = MONTH(CURRENT_DATE())", 
	        nativeQuery=true
	    )
	    public Iterable<Produit> findNewProd();
	
	@Query(
	        value = "SELECT * FROM produit t where t.id = :id", 
	        nativeQuery=true
	    )
	    public Iterable<Produit> findProdById(@Param("id") Long id);
	
}
