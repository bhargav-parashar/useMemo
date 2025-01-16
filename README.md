The useMemo hook optimizes performance by preventing unnecessary function executions. For functions performing costly operations, through useMemo the output of the function can be memoized/cached. If the same input is provided again, instead of running the function again, the cached value is retured. 

In this application, useMemo is utilized to prevent calling the calculateMultipliedCount1 and calculateMultipliedCount2 functions if there is no change in the input since the last execution.

DESCRIPTION

- In App.js, two states are maintained : count1 and count2. 
- There are two buttons to increment the count of count1 and count2 respectively.
- count1 and count2 are passed to a child component : ShowMultipliedCount. 
- ShowMultipliedCount has two functions within it. 
- These two functions take input as count1 and count2 respectively.

PROBLEM

- Since ShowMultipliedCount takes count1 and count2 as props, if any of these values change, the entire component re-renders.
- As ShowMultipliedCount has two functions : calculateMultipliedCount1 (count1) and calculateMultipliedCount2 (count2), both of these functions are executed everytime.
- Even if only value of count1 has changed, both the functions execute. 
- The calculateMultipliedCount2 (count2) function in this case would return the same output as count2 has not changed. 

SOLUTION

- To prevent this unnecessary re-rendering from happening, the funcitonis calculateMultipliedCount1 and calculateMultipliedCount2 are memoized using useMemo along with a dependency array of respective props.
- Eg :   
  const multipliedCount1 = useMemo(()=>calculateMultipliedCount1(count1),[count1]) ;
  const multipliedCount2 = useMemo(()=>calculateMultipliedCount2(count2),[count2]) ;
- Thus, the functions would only execute again if their is a change in the value of their respective props only and if there is no change, useMemo would output the last stored value of the output without executing the function again.

