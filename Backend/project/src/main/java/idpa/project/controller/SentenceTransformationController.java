package idpa.project.controller;

import idpa.project.model.GrammatikThema;
import idpa.project.model.Multiplechoice;
import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import idpa.project.service.SentenceTransformationService;
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
}
