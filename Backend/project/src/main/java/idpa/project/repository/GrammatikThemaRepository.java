package idpa.project.repository;

import idpa.project.model.GrammatikThema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrammatikThemaRepository extends JpaRepository<GrammatikThema, Long> {
    GrammatikThema findByPin(int pin);
}
