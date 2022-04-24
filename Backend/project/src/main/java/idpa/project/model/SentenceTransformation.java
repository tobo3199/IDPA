package idpa.project.model;

import javax.persistence.*;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
@Entity
public class SentenceTransformation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String aufgabenstellung;
    private String loesung1;
    private String loesung2;
    @ManyToOne
    private Uebung uebung;

    public SentenceTransformation() {}

    public SentenceTransformation(long id) {}

    public SentenceTransformation(String aufgabenstellung, String loesung1, String loesung2, Uebung uebung) {
        this.aufgabenstellung = aufgabenstellung;
        this.loesung1 = loesung1;
        this.loesung2 = loesung2;
        this.uebung = uebung;
    }



    public String getAufgabenstellung() {
        return aufgabenstellung;
    }

    public void setAufgabenstellung(String aufgabenstellung) {
        this.aufgabenstellung = aufgabenstellung;
    }

    public String getLoesung1() {
        return loesung1;
    }

    public void setLoesung1(String loesung1) {
        this.loesung1 = loesung1;
    }

    public String getLoesung2() {
        return loesung2;
    }

    public void setLoesung2(String loesung2) {
        this.loesung2 = loesung2;
    }

    public Uebung getUebung() {
        return uebung;
    }

    public void setUebung(Uebung uebung) {
        this.uebung = uebung;
    }
}
