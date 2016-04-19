package w5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Accumulators;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Filters;

public class AggregationExamples {

	public static void main(String[] args) {
		AggregationExamples ap = new AggregationExamples();
	}

	public AggregationExamples() {
		MongoClient client = new MongoClient();
		MongoDatabase db = client.getDatabase("agg2");
		MongoCollection<Document> collection = db.getCollection("zips");

		processDocs(collection);
		processAggregates(collection);
		processDocs(collection);
	}

	private void processAggregates(MongoCollection<Document> collection) {
		List<Bson> pipeline = Arrays.asList(Aggregates.group("$state", Accumulators.sum("totalPop", "$pop")),
				Aggregates.match(Filters.gte("totalPop", 10000000)));

		List<Document> results = collection.aggregate(pipeline).into(new ArrayList<Document>());
		print(results);
	}

	private void print(List<Document> results) {
		for (Document cur : results) {
			System.out.println(cur.toJson());
		}

	}

	private void processDocs(MongoCollection<Document> collection) {
		// TODO Auto-generated method stub

	}

}
