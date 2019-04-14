package com.spring.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mvc.component.User;
import com.spring.mvc.repository.UserDao;

@Service
public class UserServiceImpl {

	@Autowired
	UserDao userdao;
	
	public List<User> getAllUsers() {
		return userdao.selectAllFromDb();
	}
	
}
