public class dsathirtydays {
    public static int incremovable(int[]nums){
int c=0;

        for(int i=0;i<nums.length;i++){
            for(int j=i;j<nums.length;j++){
                boolean flag = true;
                int last=-1;
                for(int k=0;k<nums.length;k++){
                    if(k>=i && k<=j){
                        continue;
                    }
                    if(last>=nums[k]){
                       flag=false;
                       break;
                    }
                    last=nums[k];
                }
                if(flag==true){
                    c++;

                }
            }
        }
        return c;
    }
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        System.out.println(incremovable(nums));
    }
}
