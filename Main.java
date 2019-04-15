/*
https://www.baeldung.com/aws-s3-java
*/

package com.example.driver;

import java.io.File;
import java.util.List;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectSummary;

public class Main {
	
	public static void main(String[] args) {
		
		//Establish a client connection with the AWS account, which contains the S3 bucket
		AWSCredentials credentials = new BasicAWSCredentials(
				  "AKIAJ3OREQ34QENGFBLQ", //AWS accesskey
				  "xR+S3i7zfowolzmRVvGpnD7yqrkzlWZxZT2CVlc0" //AWS secretkey
				  );
		AmazonS3 s3client = AmazonS3ClientBuilder
				  .standard()
				  .withCredentials(new AWSStaticCredentialsProvider(credentials))
				  .withRegion(Regions.US_EAST_2) //Ohio region
				  .build();
		
		//List all buckets available for the AWS account and print them to the console
		List<Bucket> buckets = s3client.listBuckets();
		for(Bucket bucket : buckets) {
		    System.out.println(bucket.getName()); //prints to the console the names of all buckets availaible for the AWS account
		}
		
		
		String bucketName = "project2socialnetworkbucket"; //"bucketName" is the name of the bucket
		//Upload an object to S3 bucket
		s3client.putObject(
				  bucketName, //bucket name 
				  "awesomeGrass.jpg", //file name the object will have once inside the bucket
				  new File("/Users/Angello/Documents/Revature_Notes_and_Documents/Profile_Pictures/grass.jpg") //file path
				);
		
		//List all objects inside S3 bucket
		ObjectListing objectListing = s3client.listObjects(bucketName);
		for(S3ObjectSummary os : objectListing.getObjectSummaries()) {
			System.out.println(os.getKey()); //prints to the console the names of all objects inside the bucket
		}
		
		AmazonS3Client s3Client = (AmazonS3Client)AmazonS3ClientBuilder.defaultClient();
		//s3Client.putObject(new PutObjectRequest(bucketName, "wolf.jpg", new File("/Users/Angello/Documents/Revature_Notes_and_Documents/Profile_Pictures/wolf.jpg")).withCannedAcl(CannedAccessControlList.PublicRead));
		//s3Client.getResourceUrl(bucketName, "wolf.jpg"); //returns the URL of the object as a String
		System.out.println(s3Client.getResourceUrl(bucketName, "awesomeGrass.jpg")); //prints to the console the URL of the object in the bucket
	}
}
