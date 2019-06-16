// leetCode #64
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var dp = [];
    for (m = 0; m < grid.length ; m++){
        dp.push([]);
    }
    dp[0][0] = grid[0][0];
    for (m = 0; m < grid.length ; m++) {
        for (n = 0; n < grid[0].length; n++) {
            if (m === 0 && n > 0) {
                dp[m][n] = dp[m][n-1] + grid[m][n]
            } else if ( n === 0 && m > 0) {
                dp[m][n] = dp[m-1][n] + grid[m][n]
            } else if ( m > 0 && n > 0){
                dp[m][n] = Math.min(dp[m - 1][n], dp[m][n-1]) + grid[m][n]
            }            
        }
    }
    return dp[m-1][n-1]
};