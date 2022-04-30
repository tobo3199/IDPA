package idpa.project.controller;

import idpa.project.model.*;
import idpa.project.service.SentenceTransformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/sentenceTransformation")
@CrossOrigin
public class SentenceTransformationController {

    @Autowired
    private SentenceTransformationService sentenceTransformationService;

    @PostMapping("/add")
    public String add (@RequestBody SentenceTransformation sentenceTransformation){
        sentenceTransformationService.saveSentenceTransformation(sentenceTransformation);
        return "New Sentence Transformation added";
    }

    @GetMapping("/{id}")
    public List<SentenceTransformation> getSentenceTransformation(@PathVariable long id) {
        Uebung uebung = new Uebung(id);
        List<SentenceTransformation> sentenceTransformationList = sentenceTransformationService.getAllSentencetransformation(uebung);
        for (SentenceTransformation sentenceTransformation : sentenceTransformationList) {
            sentenceTransformation.setUebung(uebung);
        }
        return sentenceTransformationList;
    }

    @DeleteMapping("/{id}")
    public String deleteSentenceTransformation(@PathVariable long id){
        sentenceTransformationService.deleteSentenceTransformation(id);
        return "Sentencetransformation gelöscht";
    }

    @PostMapping ("/check")
    public boolean checkSentenceTransformation(@RequestBody AntwortS antwortS){
        SentenceTransformation sentenceTransformation = new SentenceTransformation(3);
        String losung = "losung";
        sentenceTransformationService.findSentenceTransformation(antwortS.getId());
        return antwortS.getEingabe().equals(sentenceTransformation.getLoesung1());

    }

    @PutMapping("/{id}")
    public String update (@RequestBody SentenceTransformation sentenceTransformation, @PathVariable long id){
        SentenceTransformation updateSentence = sentenceTransformationService.getById(id);
        updateSentence.setAufgabenstellung(sentenceTransformation.getAufgabenstellung());
        updateSentence.setLoesung1(sentenceTransformation.getLoesung1());
        updateSentence.setLoesung2(sentenceTransformation.getLoesung2());
        sentenceTransformationService.saveSentenceTransformation(updateSentence);
        return "SentenceTransformation updated";
    }
}
