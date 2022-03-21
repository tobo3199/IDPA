package idpa.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.Arrays;

import static javax.persistence.GenerationType.SEQUENCE;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:19.03.2022
 */
@Entity(name = "file")
public class FileData {

    @Id
    private Long id;
    private byte[] content;
    private int size;
    private String type;
    private String filename;

    public FileData(Long id, byte[] content, int size, String type, String filename) {
        this.id = id;
        this.content = content;
        this.size = size;
        this.type = type;
        this.filename = filename;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    @Override
    public String toString() {
        return "File{" +
                "id=" + id +
                ", file=" + Arrays.toString(content) +
                ", size=" + size +
                ", type='" + type + '\'' +
                ", filename='" + filename + '\'' +
                '}';
    }
}
