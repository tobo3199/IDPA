package idpa.project.controller;

import idpa.project.model.Auswertung;
import idpa.project.model.Uebung;
import idpa.project.service.AuswertungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auswertung")
@CrossOrigin
public class AuswertungController {

    @Autowired
    private AuswertungService auswertungService;

    @PostMapping("/")
    public Auswertung add(@RequestBody Auswertung auswertung){
        auswertungService.saveAuswertung(auswertung);
        return auswertung;
    }

    @GetMapping("/{id}")
    public List<Auswertung> getById(@PathVariable long id){
        Uebung uebung = new Uebung(id);
        List<Auswertung> auswertungList = auswertungService.getByUebung(uebung);
        for (Auswertung auswertung : auswertungList) {
            auswertung.setUebung(uebung);
        }
        return auswertungList;
    }
}
