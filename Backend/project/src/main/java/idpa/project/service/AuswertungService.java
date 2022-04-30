package idpa.project.service;

import idpa.project.model.Auswertung;
import idpa.project.model.Uebung;

import java.util.List;

public interface AuswertungService {
    public Auswertung saveAuswertung(Auswertung auswertung);
    public List<Auswertung> getByUebung(Uebung uebung);
}
