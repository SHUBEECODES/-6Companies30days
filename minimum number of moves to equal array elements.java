import java.util.*;

public class dsathirtydays {

    public static int minmoves(int[]nums){
        Arrays.sort(nums);
        int n= nums[nums.length/2];
        int moves=0;
        for(int i=0;i<nums.length;i++){
            moves+=Math.abs(nums[i]-n);
        }
        return moves;
    }
    public static void main(String[] args) {
        int[] nums = {1,2,3};
        System.out.println(minmoves(nums));
    }
}
