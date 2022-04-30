package idpa.project.model;

import javax.persistence.*;

@Entity
public class Uebung {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private String name;

    @ManyToOne
    private GrammatikThema grammatikThema;

    public Uebung() {}

    public Uebung(long id) {this.id = id;}

    public Uebung(String name, GrammatikThema grammatikthema) {
        this.name = name;
        this.grammatikThema = grammatikThema;
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

    public GrammatikThema getGrammatikThema() {
        return grammatikThema;
    }

    public void setGrammatikThema(GrammatikThema grammatikThema) {
        this.grammatikThema = grammatikThema;
    }
}
