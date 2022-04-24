package idpa.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import static javax.persistence.GenerationType.SEQUENCE;

/**
 * Klasse:FileDataResponse
 *
 * @author: Tobias Sauter
 * @version:21.03.2022
 */

public class FileDataResponse {

    private String fileDataName;

    private long id;

    public FileDataResponse(String fileDataName, long id) {
        this.fileDataName = fileDataName;
        this.id = id;
    }

    public String getFileDataName() {
        return fileDataName;
    }

    public void setFileDataName(String fileDataName) {
        this.fileDataName = fileDataName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
