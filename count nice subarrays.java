import java.util.*;

public class dsathirtydays {

    public static int nicesubarrays(int[]nums,int k){
        int c=0;
        int sum=0;
       int l=0;
       int r=0;
       while(r<nums.length){
           sum+=nums[r]%2;
           while(sum>k){
               sum=sum-nums[l]%2;
               l++;
           }
           c+=r-l+1;
           r++;

       }
        return c;
    }

    public static void main(String[] args) {
        int[] nums = {1,1,2,1,1};
        int k=3;
        int a = nicesubarrays(nums,k);
        int b= nicesubarrays(nums,k-1);
        System.out.println(a-b);
    }
}
