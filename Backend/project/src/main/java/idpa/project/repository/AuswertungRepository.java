package idpa.project.repository;

import idpa.project.model.Auswertung;
import idpa.project.model.Uebung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuswertungRepository extends JpaRepository <Auswertung, Long> {
    List<Auswertung> findAllByUebung(Uebung uebung);
}
