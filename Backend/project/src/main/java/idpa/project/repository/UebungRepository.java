package idpa.project.repository;

import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UebungRepository extends JpaRepository<Uebung, Long> {
     List<Uebung> findAllByGrammatikThema(GrammatikThema thema);
}
