package com.spring.mvc.repository;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.spring.mvc.component.Food;
import com.spring.mvc.component.Post;
import com.spring.mvc.component.User;

@Repository("postDao")
@Transactional
@EnableTransactionManagement
public class PostDao {
	
	static {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	@Autowired
	private SessionFactory sesFact;
	
	public PostDao() {
		
	}
	
	public boolean insert(Post post) {

		System.out.println("from dao: " + post);
		try {
			sesFact.getCurrentSession().save(post);
			return true;
		}catch(HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}
	
//	public boolean insert(User user) {
//		try {
//		sesFact.getCurrentSession().save(user);
//		return true;
//		}catch(HibernateException e) {
//			e.printStackTrace();
//			return false;
//		}
//	}
	
	public void update(Post post) {
		sesFact.getCurrentSession().update(post);
	}
	
	public Post selectById(int id) {
		Post post = sesFact.getCurrentSession().get(Post.class, id);
		return post;
	}
	
	
	public List<Post> selectAllFromDb() {
		System.out.println("Hi from PostDao");
		List<Post> postList = sesFact.getCurrentSession().createQuery("from Post", Post.class).list();
		System.out.println(postList);
		return postList;
	}
	
	
}
