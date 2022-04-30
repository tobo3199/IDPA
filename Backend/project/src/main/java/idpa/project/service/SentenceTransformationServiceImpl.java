package idpa.project.service;

import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import idpa.project.repository.SentenceTransformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
@Service
public class SentenceTransformationServiceImpl implements SentenceTransformationService {

    @Autowired
    private SentenceTransformationRepository sentenceTransformationRepository;


    @Override
    public SentenceTransformation saveSentenceTransformation(SentenceTransformation sentenceTransformation) {
        return sentenceTransformationRepository.save(sentenceTransformation);
    }

    @Override
    public List<SentenceTransformation> getAllSentencetransformation(Uebung uebung) {
        return sentenceTransformationRepository.findAllByUebung(uebung);
    }

    @Override
    public void deleteSentenceTransformation(long id) {
        sentenceTransformationRepository.deleteById(id);
    }

    @Override
    public void findSentenceTransformation(long id) {
        sentenceTransformationRepository.findById(id);
    }

    @Override
    public SentenceTransformation getById(long id) {
        return sentenceTransformationRepository.getById(id);
    }
}
