package idpa.project.controller;

import idpa.project.model.GrammatikThema;
import idpa.project.service.GrammatikThemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
@RestController
@RequestMapping("/api/grammatikthema")
@CrossOrigin
public class GrammatikThemaController {

    @Autowired
    private GrammatikThemaService grammatikThemaService;

    @PostMapping("/")
    public GrammatikThema add(@RequestBody GrammatikThema grammatikThema) {
        GrammatikThema thema = grammatikThemaService.saveGrammatikThema(grammatikThema);
        return thema;
    }

    @GetMapping("/")
    public List<GrammatikThema> getAllGrammatikthema(){
        return grammatikThemaService.getAllGrammatikThema();
    }


    @GetMapping("/pin/{pin}")
    public GrammatikThema getGrammatikThemaByPin(@PathVariable int pin) {
        return grammatikThemaService.getGrammatikThemaByPin(pin);
    }

    @DeleteMapping("/{id}")
    public String deleteGrammatikThema(@PathVariable long id){
        grammatikThemaService.deleteGrammatikThema(id);
        return "Grammatikthema gelöscht";
    }
}

