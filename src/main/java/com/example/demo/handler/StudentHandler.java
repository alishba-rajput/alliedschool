package com.example.demo.handler;

import com.example.demo.Transformer.StudentTransformer;
import com.example.demo.domain.Student;
import com.example.demo.model.StudentModel;
import com.example.demo.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class StudentHandler {
    private final StudentService studentService;
    private final StudentTransformer studentTransformer;

    public  void createStudent(Student student) {
        studentService.createStudent(student);
    }

    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    public List<Student> getStudentByName(String name) {
        return studentService.getStudentByName(name);

    }

    public List<Student> createStudentList() {
        return studentService.createStudentList();
    }

    public void save(List<Student> students) {
        studentService.save(students);
    }

//    public void createStudentList() {
//        studentService.createStudentList();
//    }
}

