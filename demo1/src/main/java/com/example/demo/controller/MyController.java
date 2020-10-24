package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CourseDao;
import com.example.demo.entities.Courses;
import com.example.demo.services.CourseService;

@RestController
public class MyController {
	
	

	
	
	
	@Autowired
	private CourseService courseservice;
	
	
	
	@GetMapping("/home")
	public String home() {
		return "Welcome to home page";
	}
	
	
	@GetMapping("/courses")
	public List<Courses> getCources(){
		
		
		return courseservice.getCourses();
	}
	
	
	@GetMapping("/courses/{courseId}")
    public Courses getCourses(@PathVariable long courseId)
	{
		return this.courseservice.getCourses(courseId);
	}
	
	
	
	@PostMapping("/courses")
	public Courses addCourse(@RequestBody Courses course)
	{
		return  this.courseservice.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Courses updateCourse1(@RequestBody Courses course)
	{
		return  this.courseservice.updateCourse(course);
	}
	
	
	@DeleteMapping("/courses/{courseId}")
	public void deleteCourse( @PathVariable String courseId)
	{
		
		this.courseservice.deleteCourse(Long.parseLong(courseId));
		
		return  ;
	}
}




















