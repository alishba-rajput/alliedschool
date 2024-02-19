package com.example.demo.controller;

import com.example.demo.domain.Student;
import com.example.demo.handler.StudentHandler;
import com.example.demo.model.StudentModel;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "student")
public class StudentController {
   private StudentHandler studentHandler;

   @Autowired
    public StudentController(StudentHandler studentHandler) {
        this.studentHandler = studentHandler;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/list")
    public List<Student> students() {
        return studentHandler.getAllStudents();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public String createStudent(@RequestBody Student student){
        studentHandler.createStudent(student);
        return "Student Created Successfully.";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/name/{name}")
    public List<Student> getStudentByName(@PathVariable String name){
       return studentHandler.getStudentByName(name);
    }

    @GetMapping("/name")
    public List<Student> getStudentByNameUsingRequestParam(@RequestParam String name){
        return studentHandler.getStudentByName(name);
    }


    @GetMapping("/create")
    public void createStudents(){
        List<Student> students = studentHandler.createStudentList();
        studentHandler.save(students);
    }

//    @GetMapping("/list/{age}")
//    public List<StudentModel> getStudentListAgeGreaterThenTwenty(@PathVariable int age){
//        return studentService.getStudentListGreaterThenAge(age);
//    }

//    GetMapping("/books/{studentName}")
//    public String getStudentListWithBookName(@PathVariable String studentName){
//        List<Student> studentLists = studentService.createStudentList();
//        return studentService.getStudentListWithBookName(studentLists,studentName);
//    }@
}
