package idpa.project.service;

import idpa.project.model.FileData;

import java.io.File;
import java.util.List;

public interface FileDataService {
    public FileData saveFileData(FileData fileData);
    public List<FileData> getAllFileData();
    public FileData getFileData(Long id);
    public void deleteFileData(Long id);

}
