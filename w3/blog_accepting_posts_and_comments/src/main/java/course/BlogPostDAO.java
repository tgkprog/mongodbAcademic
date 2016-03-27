package course;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;

public class BlogPostDAO {
	MongoCollection<Document> postsCollection;
	final UpdateOptions UPDATE_ONE_OPTIONS = new UpdateOptions();

	public BlogPostDAO(final MongoDatabase blogDatabase) {
		postsCollection = blogDatabase.getCollection("posts");
		UPDATE_ONE_OPTIONS.upsert(false);
		//UPDATE_ONE_OPTIONS.
		//UPDATE_ONE_OPTIONS.append("multi", false);
		//UPDATE_ONE_OPTIONS.append("upsert", false);
	}

	// Return a single post corresponding to a permalink
	public Document findByPermalink(String permalink) {

		// XXX HW 3.2, Work Here
		Document post =  new Document("permalink", permalink);
		FindIterable<Document> fnd = postsCollection.find(post);
		if(fnd!=null){
			post = fnd.first();
			System.out.println("post " + post);

		}else {
			System.out.println("post not in database :" + permalink + ".");

			makePost("Not found :" ,  "--", new ArrayList(), "usr", permalink, post, new java.util.Date());
		}
		return post;
	}

	// Return a list of posts in descending order. Limit determines
	// how many posts are returned.
	public List<Document> findByDateDescending(int limit) {

		// XXX HW 3.2, Work Here
		// Return a list of DBObjects, each one a post from the posts collection
		List<Document> posts = new ArrayList<Document>();
		Document d = new Document().append("date", -1);
		FindIterable<Document> fnd = postsCollection.find().limit(limit).sort(d);
		if(fnd == null){
			//see below
		}else{
			//fnd;
			MongoCursor<Document> p = fnd.iterator();

			while(p.hasNext()){
				posts.add(p.next());
			}
		}
		if(posts.size() == 0){
			final String permalink =  "empty";
			Document post =  new Document("permalink",  "empty");
			makePost("Not found :" ,  "--", new ArrayList(), "usr", permalink, post, new java.util.Date());
			posts.add(post);
		}
		return posts;
	}

	public String addPost(String title, String body, List tags, String username) {

		System.out.println("inserting blog entry " + title + " " + body);

		final String permalink = getPermaLink(title);

		// XXX HW 3.2, Work Here
		// Remember that a valid post has the following keys:
		// author, body, permalink, tags, comments, date
		//
		// A few hints:
		// - Don't forget to create an empty list of comments
		// - for the value of the date key, today's datetime is fine.
		// - tags are already in list form that implements suitable interface.
		// - we created the permalink for you above.

		// Build the post object and insert it
		Document post = new Document();
		makePost(title, body, tags, username, permalink, post, new java.util.Date());
		postsCollection.insertOne(post);
		return permalink;
	}

	private void makePost(String title, String body, List tags, String username, final String permalink,
			Document post, Date date) {
		post.append("permalink", permalink).append("body", body);
		post.append("author", username).append("title", title);
		post.append("username", username);
		post.append("comments", new ArrayList()).append("tags", tags);
		post.append("date", date);
	}

	private String getPermaLink(String title) {
		String permalink1 = title.replaceAll("\\s", "_"); // whitespace becomes
															// _
		permalink1 = permalink1.replaceAll("\\W", ""); // get rid of non
														// alphanumeric
		final String permalink = permalink1.toLowerCase();
		return permalink;
	}

	// White space to protect the innocent

	// Append a comment to a blog post
	public void addPostComment(final String name, final String email, final String body,
			final String permalink) {

		// XXX HW 3.3, Work Here
		// Hints:
		// - email is optional and may come in NULL. Check for that.
		// - best solution uses an update command to the database and a suitable
		// operator to append the comment on to any existing list of comments

		//permalink
		 Document d = findByPermalink(permalink);
		 Document d1 = new Document();
		 //d1 = findByPermalink(permalink);
		 System.out.println("\n\nup d " + d);
		 if(d != null){
			 List<Document> coms = (List<Document>) d.get("comments");
			 if(coms == null){
				 coms = new ArrayList<Document>();
				
			 }
			 Document com = new Document();
			 if(email != null){
				 com.append("email", email);
			 }
			 com.append("author", name).append("body", body);
			 coms.add(com);
			 d.remove("comments");
			 d1.append("comments", coms);
			 Document d2 = new Document();
			 d2.append("$set", d1);
			 System.out.println("\n 2 up d key obj:" + d  + "\n, d update :" + d2 + "\n\n");
			 //postsCollection.updateOne(filter, update, updateOptions)
			 
			 com.mongodb.client.result.UpdateResult up = postsCollection.updateOne(d, d2, UPDATE_ONE_OPTIONS);//postsCollection.replaceOne(d1, d);
			 System.out.println("\nup " + up);
			 System.out.println("up " + up.getModifiedCount());
		 }
	}
}