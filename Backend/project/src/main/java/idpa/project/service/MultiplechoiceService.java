package idpa.project.service;

import idpa.project.model.Multiplechoice;
import idpa.project.model.Uebung;

import java.util.List;

public interface MultiplechoiceService {
    public Multiplechoice saveMultiplechoice(Multiplechoice multiplechoice);
    public List<Multiplechoice> getAllMultiplechoice(Uebung uebung);
    public void deleteMultiplechoice(long id);
    public Multiplechoice findMultiplechoiceById(long id);
}
