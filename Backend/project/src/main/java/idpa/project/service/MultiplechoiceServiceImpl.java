package idpa.project.service;

import idpa.project.model.Multiplechoice;
import idpa.project.model.Uebung;
import idpa.project.repository.MultiplechoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MultiplechoiceServiceImpl implements MultiplechoiceService {

    @Autowired
    private MultiplechoiceRepository multiplechoiceRepository;


    @Override
    public Multiplechoice saveMultiplechoice(Multiplechoice multiplechoice) {
        return multiplechoiceRepository.save(multiplechoice);
    }

    @Override
    public List<Multiplechoice> getAllMultiplechoice(Uebung uebung) {
        return multiplechoiceRepository.findAllByUebung(uebung);
    }

    @Override
    public void deleteMultiplechoice(long id) {
        multiplechoiceRepository.deleteById(id);
    }

    @Override
    public Multiplechoice getById(long id) {
        return multiplechoiceRepository.getById(id);
    }
}
