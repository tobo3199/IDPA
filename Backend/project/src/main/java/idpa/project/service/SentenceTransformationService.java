package idpa.project.service;

import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import org.springframework.stereotype.Service;

import java.util.List;


public interface SentenceTransformationService {
    public SentenceTransformation saveSentenceTransformation(SentenceTransformation sentenceTransformation);
    public List<SentenceTransformation> getAllSentencetransformation(Uebung uebung);
    public void deleteSentenceTransformation(long id);
    public void findSentenceTransformation(long id);
    public SentenceTransformation findSentenceTransformationById(long id);
}
