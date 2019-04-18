package com.spring.mvc.component;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Post")
public class Post {

	@Id
	@Column(name="post_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int postId;
	
	@Column(name="author_id", nullable = true)
	private int authorId;
	
	@Column(name="post_body", nullable = true)
	private String postBody;
	
	@Column(name="post_media", nullable = true)
	private String postMedia;
		
	@OneToMany(mappedBy = "postss", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Comment> comments;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	@JsonBackReference
	private User userss;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="post_time", nullable = true)
	private Date postTime = new Date();
	
	public Post() {
		
	}

	
	
//	@Override
//	public String toString() {
//		return "Post [postId=" + postId + ", authorId=" + authorId + ", postBody=" + postBody + ", postMedia="
//				+ postMedia + "]";
//	}
	
	

	
	
//	@Override
//	public String toString() {
//		return "Post [postId=" + postId + ", authorId=" + authorId + ", postBody=" + postBody + ", postMedia="
//				+ postMedia + ", time=" + postTime + "]";
//	}

	

	public Post(int authorId, String postBody) {
		super();
		this.authorId = authorId;
		this.postBody = postBody;
	}



	public Post(int postId, int authorId, String postBody, String postMedia, List<Comment> comments,
			User userss, Date postTime) {
		super();
		this.postId = postId;
		this.authorId = authorId;
		this.postBody = postBody;
		this.postMedia = postMedia;
		this.postTime = postTime;
		this.comments = comments;
		this.userss = userss;
	}



	public Post(int postId, int authorId, String postBody, String postMedia, List<Comment> comments, User userss) {
		super();
		this.postId = postId;
		this.authorId = authorId;
		this.postBody = postBody;
		this.postMedia = postMedia;
		this.comments = comments;
		this.userss = userss;
	}


	public Post(int postId, int authorId, String postBody, String postMedia, List<Comment> comments) {
		super();
		this.postId = postId;
		this.authorId = authorId;
		this.postBody = postBody;
		this.postMedia = postMedia;
		this.comments = comments;
	}

	
	
	public Date getTime() {
		return postTime;
	}



	public void setTime(Date postTime) {
		this.postTime = postTime;
	}



	public User getUserss() {
		return userss;
	}


	public void setUserss(User userss) {
		this.userss = userss;
	}


	public List<Comment> getComments() {
		return comments;
	}


	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}


	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	public String getPostBody() {
		return postBody;
	}

	public void setPostBody(String postBody) {
		this.postBody = postBody;
	}

	public String getPostMedia() {
		return postMedia;
	}

	public void setPostMedia(String postMedia) {
		this.postMedia = postMedia;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
