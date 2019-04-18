package com.spring.mvc.component;

import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Users")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	
	@Column(name="user_name", nullable = true)
	private String userName;
	
	@Column(name="password", nullable = true)
	private String password;
	
	@Column(name="first_name", nullable = true)
	private String firstName;
	
	@Column(name="last_name", nullable = true)
	private String lastName;
	
	@Column(name="organization", nullable = true)
	private String organization;
	
	@Column(name="picture", nullable = true)
	private String picture = "https://s3.us-east-2.amazonaws.com/project2socialnetworkbucket/placeholder.png";
	
	@Column(name="uuid", nullable = true)
	private String uuid;
	
	@Column(name ="email", nullable = true)
	private String email;
	
	@OneToMany(mappedBy = "userss", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Post> posts;
	
//	NOT USING BECAUSE RESULTS IN RECURSIVE LOOP WHEN DISPLAYING JAVAOBJECT
//	@OneToMany(mappedBy = "userssComments", fetch = FetchType.LAZY)
//	@JsonManagedReference
//	private List<Comment> comments;

	public User() {
		// TODO Auto-generated constructor stub
	}
	
//	@Override
//	public String toString() {
//		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", firstName="
//				+ firstName + ", lastName=" + lastName + ", organization=" + organization + ", picture=" + picture
//				+ "]";
//	}
	
	public User(int userId, String userName, String password, String firstName, String lastName, String organization,
			String picture, List<Post> posts) {
		super();
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.organization = organization;
		this.picture = picture;
		this.posts = posts;

	}

	
//	@Override
//	public String toString() {
//		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", firstName="
//				+ firstName + ", lastName=" + lastName + ", organization=" + organization + ", picture=" + picture
//				+ ", uuid=" + uuid + "]";
//	}
	
	

	public User(String password, String email) {
		super();
		this.password = password;
		this.email = email;
	}

	public User(int userId, String userName, String password, String firstName, String lastName, String organization,
			String picture, String uuid, String email, List<Post> posts) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.organization = organization;
		this.picture = picture;
		this.uuid = uuid;
		this.email = email;
		this.posts = posts;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", organization=" + organization + ", picture=" + picture
				+ ", uuid=" + uuid + ", email=" + email + "]";
	}
	
	
	
	

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public User(int userId, String userName, String password, String firstName, String lastName, String organization,
			String picture) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.organization = organization;
		this.picture = picture;

	}
	public User(String userName, String password, String firstName, String lastName, String organization,
			String picture) {
		super();
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.organization = organization;
		this.picture = picture;

	}
	
	
}
