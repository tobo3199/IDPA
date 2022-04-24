package idpa.project.controller;

import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;
import idpa.project.service.GrammatikThemaService;
import idpa.project.service.UebungService;
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
@RequestMapping("/api/uebung")
@CrossOrigin
public class UebungController {

    @Autowired
    private UebungService uebungService;

    @Autowired
    private GrammatikThemaService grammatikThemaService;

    @PostMapping("/")
    public Uebung add(@RequestBody Uebung uebung) {
        Uebung u = uebungService.saveUebung(uebung);
        return u;
    }

    @GetMapping("/{id}")
    public List<Uebung> getUebungen(@PathVariable long id) {
        GrammatikThema grammatikThema = new GrammatikThema(id);
        List<Uebung> uebungList = uebungService.getAllUebung(grammatikThema);
        for (Uebung uebung : uebungList) {
            uebung.setGrammatikThema(grammatikThema);
        }
        return uebungList;
    }

    @DeleteMapping("/{id}")
    public String deleteUebung(@PathVariable long id){
        uebungService.deleteUebung(id);
        return "Uebung gelöscht";
    }
}
