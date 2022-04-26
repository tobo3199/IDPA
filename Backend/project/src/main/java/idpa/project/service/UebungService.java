package idpa.project.service;

import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;

import java.util.List;

public interface UebungService {
    public Uebung saveUebung(Uebung uebung);
    public List<Uebung> getAllUebung();
    public List<Uebung> getAllUebung(GrammatikThema thema);
    public Uebung getUebungById(long id);
    public void deleteUebung(long id);
}
