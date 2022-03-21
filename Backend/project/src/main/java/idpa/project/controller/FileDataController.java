package idpa.project.controller;

import idpa.project.model.FileData;
import idpa.project.service.FileDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * Klasse:FileDataController
 *
 * @author: Tobias Sauter
 * @version:19.03.2022
 */
@RestController
public class FileDataController {

    @Autowired
    private FileDataService fileDataService;

    @PostMapping("/uploadFile")
    public String add(@RequestBody FileData fileData){
        fileDataService.saveFileData(fileData);
        return "FileData is added";
    }
}
