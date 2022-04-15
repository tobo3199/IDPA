package idpa.project.service;

import idpa.project.model.Grammatikthema;

import java.util.List;

public interface GrammatikthemaService {
    public Grammatikthema saveGrammatikthema(Grammatikthema grammatikthema);
    public List<Grammatikthema> getAllGrammatikthema();
}
