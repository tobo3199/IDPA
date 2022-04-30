package idpa.project.model;
import javax.persistence.*;
import java.util.Arrays;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "file")
public class FileData {

    @Id
    @SequenceGenerator(
            name = "file_sequence",
            sequenceName = "file_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "file_sequence"
    )
    private long id;
    private byte[] content;
    private long size;
    private String type;
    private String filename;
    @ManyToOne
    private GrammatikThema grammatikThema;

    public FileData(){

    };
    public FileData(long id, byte[] content, long size, String type, String filename, GrammatikThema grammatikThema) {
        this.id = id;
        this.content = content;
        this.size = size;
        this.type = type;
        this.filename = filename;
        this.grammatikThema = grammatikThema;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
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

    public GrammatikThema getGrammatikThema() {
        return grammatikThema;
    }

    public void setGrammatikThema(GrammatikThema grammatikThema) {
        this.grammatikThema = grammatikThema;
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
