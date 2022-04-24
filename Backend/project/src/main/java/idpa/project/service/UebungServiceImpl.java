package idpa.project.service;

import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;
import idpa.project.repository.UebungRepository;
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
public class UebungServiceImpl implements UebungService {

    @Autowired
    private UebungRepository uebungRepository;

    @Override
    public Uebung saveUebung(Uebung uebung) {
        return uebungRepository.save(uebung);
    }

    @Override
    public List<Uebung> getAllUebung() {
        return uebungRepository.findAll();
    }

    @Override
    public List<Uebung> getAllUebung(GrammatikThema thema) {
        return uebungRepository.findAllByGrammatikThema(thema);
    }

    @Override
    public void deleteUebung(long id) {
        uebungRepository.deleteById(id);
    }
}
