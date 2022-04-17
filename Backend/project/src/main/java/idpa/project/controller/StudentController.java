package idpa.project.controller;

import idpa.project.model.Student;
import idpa.project.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Klasse:StudentController
 *
 * @author: Tobias Sauter
 * @version:10.03.2022
 */

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping ("/add")
    public String add(@RequestBody Student student) {
      studentService.saveStudent(student);
      return "New student is added";
    }

    @GetMapping ("/getAll")
        public List<Student> getAllStudents(){
            return studentService.getAllStudents();
        }

}
