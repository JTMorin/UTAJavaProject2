package com.spring.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.mvc.component.Food;
import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;
import com.spring.mvc.service.PostServiceImpl;
import com.spring.mvc.service.UserServiceImpl;

@Controller
public class PostController {

	@Autowired
	PostServiceImpl postService;
	
	@Autowired
	UserServiceImpl userService;
	
	public PostController() {
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/getAllPosts.app")
	public @ResponseBody List<Post> getAllPosts(){
		return postService.getAllPosts();
	}
	

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/insertPost.app", method = RequestMethod.POST)
	public @ResponseBody String getPost(@RequestBody Post values2) {
		
		User user = userService.getUser(values2.getAuthorId());
		
		values2.setUserss(user);
		
		System.out.println("VALUES: " + values2);
		boolean success = postService.addPost(values2);
		
		
		return "{\"success\":" + success + "}";
	}
}
