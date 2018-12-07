package com.proj.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.proj.models.Commande;
import com.proj.repository.CommandeRepository;

@RestController    // This means that this class is a Controller
@RequestMapping(path="/orderapi")
@CrossOrigin(origins = "*",allowedHeaders="*")
public class MyOrderController {
	@Autowired

    private CommandeRepository commandeRepository;
	
	@PostMapping(path="/ajout")
    public @ResponseBody String addOrder(@RequestBody Commande commande){
    	commande.setDateCommande();
        commandeRepository.save(commande);
        return "Order successfully added ";
    }

}
