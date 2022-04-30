package idpa.project.service;

import idpa.project.model.Auswertung;
import idpa.project.model.Uebung;
import idpa.project.repository.AuswertungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuswertungServiceImpl implements AuswertungService{

    @Autowired
    private AuswertungRepository auswertungRepository;

    @Override
    public Auswertung saveAuswertung(Auswertung auswertung) {
        return auswertungRepository.save(auswertung);
    }

    @Override
    public List<Auswertung> getByUebung(Uebung uebung) {
        return auswertungRepository.findAllByUebung(uebung);
    }

}
