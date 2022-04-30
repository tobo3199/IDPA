package idpa.project.repository;

import idpa.project.model.GrammatikThema;
import idpa.project.service.GrammatikThemaService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GrammatikThemaRepository extends JpaRepository<GrammatikThema, Long> {
    GrammatikThema findById(long id);
    GrammatikThema findByPin(int pin);
    //List<Integer> findAllPin();
}


