package idpa.project.controller;

import idpa.project.model.FileData;
import idpa.project.model.FileDataResponse;
import idpa.project.model.GrammatikThema;
import idpa.project.service.FileDataService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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
 *
 *
 * @author: Tobias Sauter
 * @version:19.03.2022
 */
@RestController
@RequestMapping("/api/fileData")
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

    @GetMapping("/{id}")
    public List<FileDataResponse> getAllFileData(@PathVariable long id) {
        GrammatikThema grammatikThema = new GrammatikThema(id);
        List<FileData> fileDataList = fileDataService.getAllFileData(grammatikThema);
        return fileDataList.stream().map(it -> new FileDataResponse(it.getFilename(), it.getId()))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/files/{id}")
    public String deleteFile(@PathVariable long id){
        fileDataService.deleteFileData(id);
        return "File deleted";
    }

    @RequestMapping(path = "/files/{id}", method = RequestMethod.GET)
    public ResponseEntity<Resource> download(@PathVariable("id") long id) throws IOException {

        FileData fileData = fileDataService.getFileData(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileData.getFilename());
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        //Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(fileData.getContent());

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(fileData.getSize())
                .contentType(MediaType.parseMediaType(fileData.getType()))
                .body(resource);


    }

}
