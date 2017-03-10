package v;

import java.math.BigInteger;

public class Solution {
	// you can also use imports, for example:
	// import java.util.*;

	// you can write to stdout for debugging purposes, e.g.
	// System.out.println("this is a debug message");
	
	static int sum(int[] numbers) {
		final int maxi = 10 * 10 * 10* 10;
		if(numbers == null || numbers.length < 2)return 0;
		BigInteger sum = new BigInteger("0");
		int till = numbers[0];
		if(till > maxi)till = maxi;
		if(till > numbers.length+1)till = numbers.length-1;
		for(int i =1;i <= till;i++){
			sum = sum.add(BigInteger.valueOf(numbers[i])); 
		}
		return sum.intValue();
    }

	public int solution(int[] A) {
		BigInteger left = new BigInteger("0");
		BigInteger right = new BigInteger("0");
		for (int i = 1; i < A.length; i++) {
			right = right.add(new BigInteger(A[i]+""));
		}
		if (left.doubleValue() == right.doubleValue())
			return 0;
		for (int i = 1; i < A.length; i++) {
	
			left = left.add(new BigInteger(A[i-1]+""));
			right = right.subtract(new BigInteger(A[i]+""));
			if (left.doubleValue() == right.doubleValue())
				return i;
		}

		return -1;
	}

	public static void main(String[] args) {
		System.err.println("d");
		Solution ap = new Solution();
		ap.testC();
	}

	int cnt, errs;

	void test(int a[], int x) {
		int g = solution(a);
		cnt++;
		if (g != x) {
			errs++;
			System.out.println("got " + g + " ex " + x + " run " + cnt);
		}
	}

	void testC() {
		int[] a = { 3, 4, 3 };
		test(a, 1);

		a = new int[] { 3, 1, 4, 3, 1 };
		test(a, 2);

		a = new int[] { 0, -12, 3, 1, 4, 3, 1 };
		test(a, 0);

		a = new int[] { -11, 3, 1, 4, 3, 1 };
		test(a, 5);
		System.out.println("Result errs " + errs + " runs " + cnt);
	}

}
