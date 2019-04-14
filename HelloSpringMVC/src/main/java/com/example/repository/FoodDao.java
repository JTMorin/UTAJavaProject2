package com.example.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Food;

@Repository("foodDao")
@Transactional
public class FoodDao {
	
	static {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	
	@Autowired
	private SessionFactory sesFact;
	
	public FoodDao() {
		
	}
	
	
	public void insert(Food food) {
		sesFact.getCurrentSession().save(food);
	}
	
	public void update(Food food) {
		sesFact.getCurrentSession().update(food);
	}
	
	public Food selectById(int id) {
		Food food = sesFact.getCurrentSession().get(Food.class, id);
		return food;
	}
	
	
	public List<Food> selectAll() {
		List<Food> foodList = sesFact.getCurrentSession().createQuery("from Food", Food.class).list();
		
		return foodList;
	}
	
	
	
	
	
	
	
	
	
	
	
}
