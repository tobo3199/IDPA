package idpa.project.service;

import idpa.project.model.FileData;
import idpa.project.repository.FileDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Klasse:FileDataServiceImpl
 *
 * @author: Tobias Sauter
 * @version:21.03.2022
 */
@Service
public class FileDataServiceImpl implements FileDataService {

    @Autowired
    private FileDataRepository fileDataRepository;

    @Override
    public FileData saveFileData(FileData fileData) {
        return fileDataRepository.save(fileData);
    }

    @Override
    public List<FileData> getAllFileData(){
        return fileDataRepository.findAll();
    }

    @Override
    public FileData getFileData(Long id) {
        return fileDataRepository.getById(id);
    }
}
