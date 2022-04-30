package idpa.project.model;

import javax.persistence.*;

@Entity
public class Multiplechoice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String aufgabenstellung;
    private String antwort1;
    private String antwort2;
    private String antwort3;
    private int korrekteAntwort;
    @ManyToOne
    private Uebung uebung;

    public Multiplechoice() {}

    public Multiplechoice(long id) {this.id = id;}

    public Multiplechoice(String aufgabenstellung, String antwort1, String antwort2, String antwort3, int korrekteAntwort, Uebung uebung) {
        this.aufgabenstellung = aufgabenstellung;
        this.antwort1 = antwort1;
        this.antwort2 = antwort2;
        this.antwort3 = antwort3;
        this.korrekteAntwort = korrekteAntwort;
        this.uebung = uebung;
    }


    public String getAufgabenstellung() {
        return aufgabenstellung;
    }

    public void setAufgabenstellung(String aufgabenstellung) {
        this.aufgabenstellung = aufgabenstellung;
    }

    public String getAntwort1() {
        return antwort1;
    }

    public void setAntwort1(String antwort1) {
        this.antwort1 = antwort1;
    }

    public String getAntwort2() {
        return antwort2;
    }

    public void setAntwort2(String antwort2) {
        this.antwort2 = antwort2;
    }

    public String getAntwort3() {
        return antwort3;
    }

    public void setAntwort3(String antwort3) {
        this.antwort3 = antwort3;
    }

    public int getKorrekteAntwort() {
        return korrekteAntwort;
    }

    public void setKorrekteAntwort(int korrekteAntwort) {
        this.korrekteAntwort = korrekteAntwort;
    }

    public Uebung getUebung() {
        return uebung;
    }

    public void setUebung(Uebung uebung) {
        this.uebung = uebung;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
