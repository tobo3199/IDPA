package idpa.project.model;

import javax.persistence.*;

@Entity
public class Auswertung {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String name;
    private int zahl;
    @ManyToOne
    private Uebung uebung;

    public Auswertung(){}

    public Auswertung(long id){
        this.id = id;
    }

    public Auswertung(String name, int zahl, Uebung uebung) {
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

    public void setZahl(int zahl) {
        this.zahl = zahl;
    }

    public Uebung getUebung() {
        return uebung;
    }

    public void setUebung(Uebung uebung) {
        this.uebung = uebung;
    }
}
