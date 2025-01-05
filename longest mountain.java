import java.util.*;

public class dsathirtydays {
    public static int longestMountain(int[] arr) {
        int ans=0;
for(int i=1;i<=arr.length-2;){
    int c=1;
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        int j=i;
        while(j>0 && arr[j]>arr[j-1]){
            c++;
            j--;
        }
        int k=i;
        while(k<arr.length-1 && arr[k]>arr[k+1]){
            c++;
            k++;
        }
        ans= Math.max(ans,c);
    }else{
        i++;
    }
}
return ans;
    }



    public static void main(String[] args) {
        int[] arr = {2,2,2};
        System.out.println(longestMountain(arr));



    }
}
