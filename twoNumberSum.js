function twoNumberSum(array, targetSum){
  for (let i = 0; i<array.length; i++){
		for(let k = i+1; k<=array.length;k++){
			let sum = array[i]+array[k];
			if(sum === targetSum){
			return [array[i] , array[k]].sort((a,b)=>(a-b))
			}
		}
	}
	return []
}