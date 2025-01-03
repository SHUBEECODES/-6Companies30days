import java.util.*;

public class dsathirtydays {

    public static int[][] imagesmoother(int [][] img){
        int m = img.length;
        int n = img[0].length;
        int[]x = {-1,-1,-1,0,0,0,1,1,1};
        int[]y = {-1,0,1,-1,0,1,-1,0,1};
        int[][] res = new int[m][n];
for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        int sum=0;
        int count=0;
        for(int k=0;k<9;k++){
            int xi = i+x[k];
            int yi= j+y[k];
            if(xi>=0 && xi<m && yi>=0 && yi<n){
                sum+=img[xi][yi];
                count++;
            }
        }
        res[i][j]=sum/count;
    }
}
return res;
    }

    public static void main(String[] args) {
        int[][]img = {{100,200,100},{200,50,200},{100,200,100}};
        int[][] res = imagesmoother(img);
        for(int i=0;i< res.length;i++){
            for(int j=0;j<res[0].length;j++){
                System.out.print(res[i][j]);
            }
            System.out.println();
        }



    }
}
