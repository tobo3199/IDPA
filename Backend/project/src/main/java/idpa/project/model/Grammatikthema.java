package idpa.project.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
@Entity
public class Grammatikthema {
    @Id

    private String name;
    private int pin;

    public Grammatikthema(String name, int pin) {
        this.name = name;
        this.pin = pin;
    }

    public Grammatikthema() {

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
