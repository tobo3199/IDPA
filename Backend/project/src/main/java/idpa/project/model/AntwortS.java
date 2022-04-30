package idpa.project.model;

public class AntwortS {
    private int id;
    private String eingabe;

    public AntwortS(){}

    public AntwortS(int id, String eingabe) {
        this.id = id;
        this.eingabe = eingabe;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEingabe() {
        return eingabe;
    }

    public void setEingabe(String eingabe) {
        this.eingabe = eingabe;
    }
}
