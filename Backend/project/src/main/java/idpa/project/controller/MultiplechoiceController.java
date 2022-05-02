package idpa.project.controller;

import idpa.project.model.Multiplechoice;
import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import idpa.project.service.MultiplechoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/multiplechoice")
@CrossOrigin
public class MultiplechoiceController {

    @Autowired
    private MultiplechoiceService multiplechoiceService;

    @PostMapping("/add")
    public String add(@RequestBody Multiplechoice multiplechoice){
        multiplechoiceService.saveMultiplechoice(multiplechoice);
        return "New Multiplechoice added";
    }

    @GetMapping("/{id}")
    public List<Multiplechoice> getMultiplechoice(@PathVariable long id) {
        Uebung uebung = new Uebung(id);
        List<Multiplechoice> multiplechoiceList = multiplechoiceService.getAllMultiplechoice(uebung);
        for (Multiplechoice multiplechoice : multiplechoiceList) {
            multiplechoice.setUebung(uebung);
        }
        return multiplechoiceList;
    }

    @DeleteMapping("/{id}")
    public String deleteMultiplechoice(@PathVariable long id){
        multiplechoiceService.deleteMultiplechoice(id);
        return "Multiplechoice gelöscht";
    }

    @PutMapping("/{id}")
    public String update (@RequestBody Multiplechoice multiplechoice, @PathVariable long id){
        Multiplechoice updateMultiplechoice = multiplechoiceService.getById(id);
        updateMultiplechoice.setAufgabenstellung(multiplechoice.getAufgabenstellung());
        updateMultiplechoice.setAntwort1(multiplechoice.getAntwort1());
        updateMultiplechoice.setAntwort2(multiplechoice.getAntwort2());
        updateMultiplechoice.setAntwort3(multiplechoice.getAntwort3());
        updateMultiplechoice.setKorrekteAntwort(multiplechoice.getKorrekteAntwort());
        multiplechoiceService.saveMultiplechoice(updateMultiplechoice);
        return "Multiplechoice updated";
    }
}
