package idpa.project.controller;

import idpa.project.model.FileData;
import idpa.project.model.FileDataResponse;
import idpa.project.service.FileDataService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Klasse:FileDataController
 * https://www.pluralsight.com/guides/uploading-files-with-reactjs
 *
 * @author: Tobias Sauter
 * @version:19.03.2022
 */
@RestController
@RequestMapping("/fileData")
@CrossOrigin
public class FileDataController {

    @Autowired
    private FileDataService fileDataService;

    @PostMapping("/uploadFile")
    public String add(@RequestParam MultipartFile file) throws IOException {
       // fileDataService.saveFileData(file);
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileData fileData = new FileData();
        fileData.setContent(file.getBytes());
        fileData.setFilename(fileName);
        fileData.setType(file.getContentType());
        fileData.setSize(file.getSize());
        fileDataService.saveFileData(fileData);
        return "FileData is added";
    }

    @GetMapping("/files")
    public List<FileDataResponse> getAllFileData() {
        List<FileData> fileDataList = fileDataService.getAllFileData();
        return fileDataList.stream().map(it -> new FileDataResponse(it.getFilename(), it.getId()))
                .collect(Collectors.toList());
    }

}
