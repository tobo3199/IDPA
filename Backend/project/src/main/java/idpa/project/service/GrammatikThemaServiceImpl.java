package idpa.project.service;

import idpa.project.model.GrammatikThema;
import idpa.project.repository.GrammatikThemaRepository;
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
public class GrammatikThemaServiceImpl implements GrammatikThemaService {

    @Autowired
    private GrammatikThemaRepository grammatikThemaRepository;

    @Override
    public GrammatikThema saveGrammatikThema(GrammatikThema grammatikThema) {
        return grammatikThemaRepository.save(grammatikThema);

    }

    @Override
    public List<GrammatikThema> getAllGrammatikThema() {
        return grammatikThemaRepository.findAll();
    }

    @Override
    public GrammatikThema getGrammathikThema(long id) {
        return grammatikThemaRepository.getById(id);
    }

    @Override
    public GrammatikThema getGrammatikThemaByPin(int pin) {
        return grammatikThemaRepository.findByPin(pin);
    }

    @Override
    public GrammatikThema getGrammatikThemaById(long id) { return grammatikThemaRepository.findById(id);}


    @Override
    public void deleteGrammatikThema(long id) {
        grammatikThemaRepository.deleteById(id);
    }

}
