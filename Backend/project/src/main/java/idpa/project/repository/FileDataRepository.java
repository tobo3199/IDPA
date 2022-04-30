package idpa.project.repository;

import idpa.project.model.FileData;
import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileDataRepository extends JpaRepository<FileData, Long> {
    List<FileData> findAllByGrammatikThema(GrammatikThema thema);
}
