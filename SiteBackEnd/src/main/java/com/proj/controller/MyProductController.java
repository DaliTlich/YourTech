package com.proj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.proj.models.Produit;
import com.proj.repository.ProduitRepository;

@RestController    // This means that this class is a Controller
@RequestMapping(path="/api")
@CrossOrigin(origins = "*",allowedHeaders="*")
public class MyProductController {
    @Autowired

    private ProduitRepository produitRepository;


    @PostMapping(path="/ajout")
    public @ResponseBody String addProduct(@RequestBody Produit produit){
    	produit.setDateajout();
        produitRepository.save(produit);
        return "Product successfully added ";
    }
   

    @GetMapping(path="/produits")
    public @ResponseBody Iterable<Produit> getAllProducts() {
        //This returns a JSON or XML with the users
        return produitRepository.findAll();
    }
    
   
    
    @GetMapping(path="/produitscat")
    public @ResponseBody Iterable<Produit>getProductsByCat(@RequestParam String categorie){
    	return produitRepository.findByCat(categorie);
    }
    
    @GetMapping(path="/produitsnouv")
    public @ResponseBody Iterable<Produit>getNewProducts(){
    	return produitRepository.findNewProd();   
    }
    
    @GetMapping(path="/supp")
    public @ResponseBody String delProd (@RequestParam String id) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

    	
        produitRepository.deleteById(Long.parseLong(id));
        return "deleted";
    }
    
    
    
    }

