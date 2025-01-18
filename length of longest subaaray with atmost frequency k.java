import java.util.*;

public class dsathirtydays {
    public static int maxSubarrayLength(int[] arr,int k) {
int max=0;
HashMap<Integer,Integer> map = new HashMap<>();
int i=0;
int j=0;
int res=1;

while(i<arr.length){

   int currfreq = map.getOrDefault(arr[i],0);
   if(currfreq<k){
       map.put(arr[i],currfreq+1);
   }else{
       while(arr[i]!=arr[j]){
           map.put(arr[j],map.get(arr[j])-1);
           j++;
       }
       j++;
   }
   max=i-j+1;
   res=Math.max(res,max);

   i++;
}
return res;
    }



    public static void main(String[] args) {
       int[]arr = {5,5,5,5,5,5};
        System.out.println(maxSubarrayLength(arr,4));

      }






    }

