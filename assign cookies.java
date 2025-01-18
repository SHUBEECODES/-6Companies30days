import java.util.*;

public class dsathirtydays {
  public static int assigncookies(int[] g,int[] s){
      Arrays.sort(g);
      Arrays.sort(s);
      int i=0;
      int j=0;
      int c=0;
      while(i<g.length && j<s.length){
          if(g[i]<=s[j]){
              c++;
              i++;
              j++;
          }else {
              j++;
          }
      }
      return c;
  }



    public static void main(String[] args) {
       int[]g = {10,9,8,7};
       int[]s = {5,6,7,8};
        System.out.println(assigncookies(g,s));
      }






    }

