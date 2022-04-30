package idpa.project.model;

import javax.persistence.*;

@Entity
public class Auswertung {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String name;
    private double zahl;
    @ManyToOne
    private Uebung uebung;

    public Auswertung(){}

    public Auswertung(long id, String name, double zahl, Uebung uebung) {
        this.id = id;
        this.name = name;
        this.zahl = zahl;
        this.uebung = uebung;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getZahl() {
        return zahl;
    }

    public void setZahl(double zahl) {
        this.zahl = zahl;
    }

    public Uebung getUebung() {
        return uebung;
    }

    public void setUebung(Uebung uebung) {
        this.uebung = uebung;
    }
}
