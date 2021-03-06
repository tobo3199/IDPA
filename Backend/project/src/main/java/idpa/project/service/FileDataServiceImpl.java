package idpa.project.service;

import idpa.project.model.FileData;
import idpa.project.model.GrammatikThema;
import idpa.project.repository.FileDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileDataServiceImpl implements FileDataService {

    @Autowired
    private FileDataRepository fileDataRepository;

    @Override
    public FileData saveFileData(FileData fileData) {
        return fileDataRepository.save(fileData);
    }
/*
    @Override
    public List<FileData> getAllFileData(){
        return fileDataRepository.findAll();
    }*/

    @Override
    public FileData getFileData(long id) {
        return fileDataRepository.getById(id);
    }

    @Override
    public void deleteFileData(long id) {
        fileDataRepository.deleteById(id);
    }

    @Override
    public List<FileData> getAllFileData(GrammatikThema thema) {
        return fileDataRepository.findAllByGrammatikThema(thema);
    }


}
