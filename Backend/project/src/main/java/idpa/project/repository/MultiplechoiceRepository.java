package idpa.project.repository;

import idpa.project.model.Multiplechoice;
import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MultiplechoiceRepository extends JpaRepository<Multiplechoice, Long> {
    List<Multiplechoice> findAllByUebung(Uebung uebung);
    Multiplechoice findById(long id);
}
