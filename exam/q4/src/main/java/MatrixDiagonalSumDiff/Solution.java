package MatrixDiagonalSumDiff;

import java.io.*;
import java.math.BigInteger;
import java.util.*;

public class Solution {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int a;
		
		String b;
		System.out.println("Enter # lines / sqr arix size :" );
		b = in.nextLine();
		a = Integer.parseInt(b);
		long [][]matrix = new long[a][a];
		for(int j = 1; j <= a; j++){
			System.out.println("Enter " + j + " of " + a);
			b = in.nextLine();
			
			StringTokenizer st = new StringTokenizer(b, " ");
			final int cnt = st.countTokens();		
			
			for (int i = 0; i < cnt; i++) {
				matrix[j-1][i] = Long.parseLong(st.nextToken());
			}
			
		}
		sumDiaDiff(matrix);
		System.out.println("End");
	}

	private static void sumDiaDiff(long[][] matrix) {
		final int n = matrix.length;
		final int n2 = n - 1;
		BigInteger sum1 = new BigInteger("0");
		BigInteger sum2 = new BigInteger("0");
		for(int i = 0; i < n; i++){
			sum1 = sum1.add(BigInteger.valueOf(matrix[i][i]));
			sum2 = sum2.add(BigInteger.valueOf(matrix[i][n2 - i]));
		}
		long aa = Math.abs(sum1.longValue() - sum2.longValue());
		System.out.println("a "  + aa);
		
	}
	
}
