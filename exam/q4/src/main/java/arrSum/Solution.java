package arrSum;

import java.io.*;
import java.math.BigInteger;
import java.util.*;

public class Solution {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int a;
		
		String b;
		b = in.nextLine();
		a = Integer.parseInt(b);
		b = in.nextLine();
		long sum = solveMeFirst(a, b);
		System.out.println(sum);
	}

	public static long solveMeFirst(int a, String b) {
		if (b == null || b.length() == 0)
			return 0;
		StringTokenizer st = new StringTokenizer(b, " ");
		final int cnt = st.countTokens();
		if (a != cnt) {
			System.out.println("token cnt : " + cnt + "does not match a :" + a);
			return -1;
		}
		BigInteger sum = new BigInteger("0");
		for (int i = 0; i < cnt; i++) {
			sum = sum.add(new BigInteger(st.nextToken()));
		}

		return sum.longValue();
	}
}
