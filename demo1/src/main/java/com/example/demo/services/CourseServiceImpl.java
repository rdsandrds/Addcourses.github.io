package com.example.demo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseDao;
import com.example.demo.entities.Courses;


@Service
public class CourseServiceImpl implements CourseService{

	//List<Courses> list;
	@Autowired
    private  CourseDao coursedao;



	@Override
	public  List<Courses> getCourses() {
	
		return coursedao.findAll();
	
	
	}

	@Override
	public Courses addCourse(Courses course) {
       	
		
		coursedao.save(course);
      return course;
}

	@Override
	public Courses updateCourse(Courses course) {

		
		coursedao.save(course);

	
		return course;
	}
	
	@Override
	public void deleteCourse(long parseLong)
	{
		//list=this.list.parallelStream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		
		
		Courses entity=coursedao.getOne(parseLong);
		coursedao.delete(entity);
		
	}

	@Override
	public Courses getCourses(long courseId) {
		// TODO Auto-generated method stub
		return  coursedao.getOne(courseId);
	}





	
	
}




























