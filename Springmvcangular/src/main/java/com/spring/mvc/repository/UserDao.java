package com.spring.mvc.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;

@Repository("userDao")
@Transactional
@EnableTransactionManagement
public class UserDao {

	static {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	@Autowired
	private SessionFactory sesFact;
	
	public UserDao() {
		// TODO Auto-generated constructor stub
	}
	
	public void insert(User user) {
		sesFact.getCurrentSession().save(user);
	}
	
	public void update(User user) {
		sesFact.getCurrentSession().update(user);
	}
	
	public User selectById(int id) {
		User user = sesFact.getCurrentSession().get(User.class, id);
		return user;
	}
	
	
	public List<User> selectAllFromDb() {
		System.out.println("Hi from UserDao");
		List<User> userList = sesFact.getCurrentSession().createQuery("from User", User.class).list();
		System.out.println(userList);
		return userList;
	}
	
}
