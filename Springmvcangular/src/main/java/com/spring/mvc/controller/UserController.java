package com.spring.mvc.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.ServletException;

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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;
import com.spring.mvc.service.UserServiceImpl;
import com.spring.mvc.tools.EmailHandler;

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
//	@GetMapping(value="{email}/getUserByEmailS.app")
//	public @ResponseBody User getUser(@PathVariable("email") String email) {
//		return userService.getUserByEmailAndPW(email);
//		
//	}
	
//	@CrossOrigin(origins = "http://localhost:4200")
//	@RequestMapping(value = "/insertUser.app", method = RequestMethod.POST)
//	public void addPerson(@ModelAttribute("user") User p) {
//		System.out.println(p);
//		userService.addUser(p);
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/insertUser.app", method = RequestMethod.POST)
	public void addPerson(@RequestBody User user) {
		System.out.println(user);
		userService.addUser(user);
	}
	
	//testing jquery example

	

	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/insertUser2.app", method = RequestMethod.POST)
	public @ResponseBody String getUser(@RequestBody User values2) {
		System.out.println(values2);
		boolean success = userService.addUser(values2);
		
		return "{\"success\":" + success + "}";
	}
	
//	@CrossOrigin(origins = "http://localhost:4200")
//	@RequestMapping(value = "/login.app", method = RequestMethod.POST)
//	public @ResponseBody String getUserLogin(@RequestBody User values) {
//		
//		
//		System.out.println("values = " + values);
//		
//		User success = userService.getUserByEmailAndPW(values.getEmail());
//		
//		
//		System.out.println(success);
//		if (success != null) {
//			return "{\"success\":" + success + "}";
//		}else {
//		
//			return "{\"failure\":" + success + "}";
//		}
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/login2.app", method = RequestMethod.POST)
	public @ResponseBody String getUser2(@RequestBody User user) throws JsonProcessingException {
		User u = userService.getUserByEmailAndPW(user.getEmail(), user.getPassword() );
		String ret = "";
		if(u == null)
		{
			ret += "{\"success\": false}";
		}
		else
		{
			ObjectMapper mapper = new ObjectMapper();
			//Object to JSON in String
			String jsonInString = mapper.writeValueAsString(u);
			ret += "{\"success\": true, \"user\": " + jsonInString + "}";
		}
		
		return ret;
//		if (u == null) {
//			throw new ServletException("invalid Username or Password.");
//			//throw new NotAuthorizedException("invalid Username or Password.");
//			//((HttpResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED,"Invalid Username or Password.");
//		} else {
//			System.out.println(" USER " + u);
//			return u;
//		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/send-email.app", method = RequestMethod.POST)
	public @ResponseBody String getUserByE(@RequestBody User user) throws JsonProcessingException, AddressException, UnsupportedEncodingException, MessagingException {
		User u = userService.getUserByEmail(user.getEmail());
		String ret = "";

		if(u == null)
		{
			ret += "{\"success\": false}";
		}
		else
		{
			ObjectMapper mapper = new ObjectMapper();
			//Object to JSON in String
			String jsonInString = mapper.writeValueAsString(u);
			ret += "{\"success\": true, \"user\": " + jsonInString + "}";
			EmailHandler.sendEmail(String.valueOf(u.getUserId()) , u.getEmail());
		}
		
		return ret;
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/updatePassword.app", method = RequestMethod.POST)
	public @ResponseBody String UpdatePW(@RequestBody User user) throws JsonProcessingException, AddressException, UnsupportedEncodingException, MessagingException {
		User u = userService.getUserByEmail(user.getEmail());
		String ret = "";

		if(u == null)
		{
			ret += "{\"success\": false}";
		}
		else
		{
			ObjectMapper mapper = new ObjectMapper();
			//Object to JSON in String
			String jsonInString = mapper.writeValueAsString(u);
			ret += "{\"success\": true, \"user\": " + jsonInString + "}";
			EmailHandler.sendEmail(String.valueOf(u.getUserId()) , u.getEmail());
		}
		
		return ret;
	}
}
