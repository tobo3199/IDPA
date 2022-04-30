package idpa.project.service;

import idpa.project.model.FileData;
import idpa.project.model.GrammatikThema;
import idpa.project.model.Uebung;

import java.io.File;
import java.util.List;

public interface FileDataService {
    public FileData saveFileData(FileData fileData);
    //public List<FileData> getAllFileData();
    public FileData getFileData(long id);
    public void deleteFileData(long id);
    public List<FileData> getAllFileData(GrammatikThema thema);

}
