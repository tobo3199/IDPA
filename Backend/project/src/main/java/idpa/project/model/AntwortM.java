package idpa.project.model;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
public class AntwortM {
    private long id;
    private int eingabe;

    public AntwortM(){}

    public AntwortM(long id, int eingabe) {
        this.id = id;
        this.eingabe = eingabe;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getEingabe() {
        return eingabe;
    }

    public void setEingabe(int eingabe) {
        this.eingabe = eingabe;
    }
}
