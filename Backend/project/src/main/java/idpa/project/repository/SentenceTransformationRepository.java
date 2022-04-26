package idpa.project.repository;

import idpa.project.model.SentenceTransformation;
import idpa.project.model.Uebung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SentenceTransformationRepository extends JpaRepository<SentenceTransformation, Long> {
    List<SentenceTransformation> findAllByUebung(Uebung uebung);
    SentenceTransformation findById(long id);

}
