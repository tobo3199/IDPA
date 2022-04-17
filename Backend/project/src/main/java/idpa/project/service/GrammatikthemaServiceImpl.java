package idpa.project.service;

import idpa.project.model.Grammatikthema;
import idpa.project.model.Student;
import idpa.project.repository.GrammatikthemaRepository;
import idpa.project.repository.StudentRepository;
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
public class GrammatikthemaServiceImpl implements GrammatikthemaService{

    @Autowired
    private GrammatikthemaRepository grammatikthemaRepository;

    @Override
    public Grammatikthema saveGrammatikthema(Grammatikthema grammatikthema) {
        return grammatikthemaRepository.save(grammatikthema);

    }

    @Override
    public List<Grammatikthema> getAllGrammatikthema() {
        return grammatikthemaRepository.findAll();
    }
}
