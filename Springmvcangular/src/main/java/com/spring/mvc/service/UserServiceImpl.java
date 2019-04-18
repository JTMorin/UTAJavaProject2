package com.spring.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;
import com.spring.mvc.repository.PostDao;
import com.spring.mvc.repository.UserDao;

@Service
public class UserServiceImpl {

	@Autowired
	UserDao userdao;
	
	public List<User> getAllUsers() {
		return userdao.selectAllFromDb();
	}
	
	public User getUser(int id) {
		return userdao.selectById(id);
	}
	
//	public void addUser(User u) {
//		userdao.insert(u);
//	}
	
	public boolean addUser(User u) {
		return userdao.insert(u);
	}
	

	
	public User getUserByEmailAndPW(String email, String password) {
		User d = new User();
		d = userdao.getUserByEmailAndPassword(email, password);
		System.out.println(d);
		return d;
	}
	
	public User getUserByEmail(String email) {
		User d = new User();
		d = userdao.getUserByEmail(email);
		System.out.println(d);
		return d;
	}
}
