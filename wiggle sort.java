import java.util.*;

public class dsathirtydays {

    public static void wigglesort(int[]nums){
        int n = nums.length;

        int[] arr  = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=nums[i];
        }
        Arrays.sort(arr);
        int x=n-1;
        for(int i=1;i<n;i=i+2){
            nums[i]=arr[x];
            x--;
        }
        int j=0;
        if(n%2==0){
            j=n/2-1;
        }else{
            j=n/2+1;
        }
        for(int i=0;i<n;i=i+2){
            nums[i]=arr[j];
            j--;
        }
    }

    public static void main(String[] args) {
        int[] nums = {1,3,2,2,3,1};
      wigglesort(nums);
      for(int i=0;i<nums.length;i++){
          System.out.print(nums[i]+" ");
      }

    }
}
