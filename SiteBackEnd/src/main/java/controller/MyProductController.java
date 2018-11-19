package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController    // This means that this class is a Controller
@RequestMapping(path="/api")
@CrossOrigin(origins = "*",allowedHeaders="*")
public class MyProductController {
    @Autowired

    private ProduitRepository produitRepository;


    @GetMapping(path="/ajout")
    public @ResponseBody String ajNouvProd (@RequestParam String nomprod
            , @RequestParam String description, @RequestParam String categorie, @RequestParam String price, @RequestParam String img) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Produit prod = new Produit(nomprod, Float.parseFloat(price) , img , description, categorie);
        produitRepository.save(prod);
        return "Saved";
    }

    @GetMapping(path="/produits")
    public @ResponseBody Iterable<Produit> getAllProducts() {
        //This returns a JSON or XML with the users
        return produitRepository.findAll();
    }
    
    @GetMapping(path="/produitsord")
    public @ResponseBody Iterable<Produit>getOrdProducts(){
    	return produitRepository.findByCat("ordettab");
    }
    
    @GetMapping(path="/produitstel")
    public @ResponseBody Iterable<Produit>getTelProducts(){
    	return produitRepository.findByCat("tel");
    }
}

