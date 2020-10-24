package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Courses;

public interface CourseService {
	
	public  List<Courses> getCourses();

	public Courses getCourses(long courseId);
	
public  Courses addCourse(Courses course);

public Courses updateCourse(Courses course);

public void deleteCourse(long parseLong);


}
