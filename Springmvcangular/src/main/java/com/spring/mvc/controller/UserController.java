package com.spring.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="{num}/getUser.app")
	public @ResponseBody User getUser(@PathVariable("num") int num) {
		return userService.getUser(num);
	}
	
//	@CrossOrigin(origins = "http://localhost:4200")
//	@RequestMapping(value = "/insertUser.app", method = RequestMethod.POST)
//	public void addPerson(@ModelAttribute("user") User p) {
//		System.out.println(p);
//		userService.addUser(p);
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/insertUser.app", method = RequestMethod.POST)
	public User addPerson(@RequestBody User user) {
		System.out.println(user);
		userService.addUser(user);
		return user;
	}
	
	
	
	
	
	
	
	
}
