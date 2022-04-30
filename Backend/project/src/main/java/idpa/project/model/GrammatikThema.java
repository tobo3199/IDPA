package idpa.project.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class GrammatikThema {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String name;

    private int pin;

    public GrammatikThema() {
    }

    public GrammatikThema(long id) {
        this.id = id;
    }

    public GrammatikThema(String name, int pin) {
        this.name = name;
        this.pin = pin;
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

    public int getPin() {
        return pin;
    }

    public void setPin(int pin) {
        this.pin = pin;
    }

    @Override
    public String toString() {
        return "Grammatikthema{" +
                "name='" + name + '\'' +
                ", pin=" + pin +
                '}';
    }
}
