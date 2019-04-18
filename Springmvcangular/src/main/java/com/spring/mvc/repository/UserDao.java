package com.spring.mvc.repository;

import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.hibernate.transform.Transformers;
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
	
	public boolean insert(User user) {
		try {
		sesFact.getCurrentSession().save(user);
		return true;
		}catch(HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public void update(User user) {
		sesFact.getCurrentSession().update(user);
	}
	
	public User selectById(int id) {
		User user = sesFact.getCurrentSession().get(User.class, id);
		return user;
	}
	
	public User getUserByEmailAndPassword(String email, String password) {
		//User user = sesFact.getCurrentSession().get(User.class, email);
//		List<User> uList = sesFact.getCurrentSession().createQuery("from User", User.class).list();
		 Query<User> query = sesFact.getCurrentSession().createSQLQuery("Select * From Users Where Email= :email AND Password= :password")
				 .addEntity(User.class)
				 .setParameter("email", email)
				 .setParameter("password", password);
		 
		 List<User> obs =  query.list();
		 
		User u = null;
		System.out.println(obs);
		Iterator<User> obsIterator = obs.iterator();
		while(obsIterator.hasNext()) {
			User ob = obsIterator.next();
			System.out.println(ob);
			return ob;
		}
//		for (User x : uList) {
//			if (x.getEmail().equals(email)) {
//				u = x;
//				break;
//			}
//		}
		
		//System.out.println(uList);
//		if (uList == null) {
//			return null;
//		}
//		else {
//			return uList.get(0);
//		}
		//System.out.println("User " + u);
		return u;
		
	}
	
	public User getUserByEmail(String email) {
		//User user = sesFact.getCurrentSession().get(User.class, email);
//		List<User> uList = sesFact.getCurrentSession().createQuery("from User", User.class).list();
		 System.out.println(email);
		
		 Query<User> query = sesFact.getCurrentSession().createSQLQuery("Select * From Users Where Email= :email")
				 .addEntity(User.class)
				 .setParameter("email", email);
		 
		 List<User> obs =  query.list();
		 

		User u = null;
		//System.out.println(obs);
		Iterator<User> obsIterator = obs.iterator();
		while(obsIterator.hasNext()) {
			User ob = obsIterator.next();
			System.out.println(ob);
			return ob;
		}
		return u;
	}
	
	
	public List<User> selectAllFromDb() {
		//System.out.println("Hi from UserDao");
		List<User> userList = sesFact.getCurrentSession().createQuery("from User", User.class).list();
		//System.out.println(userList);
		return userList;
	}
	
}
