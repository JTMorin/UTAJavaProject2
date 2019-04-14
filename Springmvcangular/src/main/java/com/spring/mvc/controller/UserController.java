package com.spring.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;
import com.spring.mvc.service.UserServiceImpl;

@Controller
public class UserController {

	@Autowired
	UserServiceImpl userService;
	
	public UserController() {
		// TODO Auto-generated constructor stub
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/getAllUsers.app")
	public @ResponseBody List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
}
