package idpa.project.service;

import idpa.project.model.GrammatikThema;

import java.util.List;

public interface GrammatikThemaService {
    public GrammatikThema saveGrammatikThema(GrammatikThema grammatikThema);
    public List<GrammatikThema> getAllGrammatikThema();
    public GrammatikThema getGrammathikThema(long id);
    public GrammatikThema getGrammatikThemaById(long id);
    public GrammatikThema getGrammatikThemaByPin(int pin);
    public void deleteGrammatikThema(long id);
    //public List<Integer> findAllPin();
}
