const ProblemDetails = [
  {
    name: "Tower of Hanoi",
    difficulty: "Easy",
    points: 20,
    status: "Unsolved",
    category: ["Recursion"],
    saved: false,
    description: "Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules: Only one disk can be moved at a time. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack. No disk may be placed on top of a smaller disk."
  },
  { 
    name: "Connected Components",
    difficulty: "Hard",
    points: 70,
    status: "Solved",
    category: ["Graphs"],
    saved: false,
    description: "We can find all strongly connected components in O(V+E) time using Kosaraju’s algorithm. Following is detailed Kosaraju’s algorithm. Create an empty stack ‘S’ and do DFS traversal of a graph. In DFS traversal, after calling recursive DFS for adjacent vertices of a vertex, push the vertex to stack. In the above graph, if we start DFS from vertex 0, we get vertices in stack as 1, 2, 4, 3, 0. Reverse directions of all arcs to obtain the transpose graph. One by one pop a vertex from S while S is not empty. Let the popped vertex be ‘v’. Take v as source and do DFS (call DFSUtil(v)). The DFS starting from v prints strongly connected component of v. In the above example, we process vertices in order 0, 3, 4, 2, 1 (One by one popped from stack). "
  },
  { 
    name: "Rat in Maze",
    difficulty: "Medium",
    points: 50,
    status: "Solved",
    category: ["Graphs"],
    saved: true,
    description: "Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it. Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell."
  },
  { 
    name: "Bit Game",
    difficulty: "Easy",
    points: 20,
    status: "Unsolved",
    category: ["Bit Manipulation", "Recursion"],
    saved: false,
    description: "Bit manipulation is the act of algorithmically manipulating bits or other pieces of data shorter than a word. Computer programming tasks that require bit manipulation include low-level device control, error detection and correction algorithms, data compression, encryption algorithms, and optimization. For most other tasks, modern programming languages allow the programmer to work directly with abstractions instead of bits that represent those abstractions. Source code that does bit manipulation makes use of the bitwise operations: AND, OR, XOR, NOT, and bit shifts. Bit manipulation, in some cases, can obviate or reduce the need to loop over a data structure and can give many-fold speed-ups, as bit manipulations are processed in parallel, but the code can become more difficult to write and maintain."
  },
  { 
    name: "Shortest Path",
    difficulty: "Hard",
    points: 100,
    status: "Unsolved",
    category: ["Graph"],
    saved: false,
    description: "In a country, there are N cities numbered from 1 to N. There are M trains in the country which are used by people to move from one city to another. Each train starts from city Li and ends at city Ri and the cost of taking the train is Wi. One can travel between any two cities (from smaller index to larger one) that lie between Li and Ri ( both inclusive) with the cost of Wi. More formally people can travel from city u to v (Li≤u<v≤Ri) at the cost of Wi (1≤i≤M)."
  },
  {
    name: "Count the Balloons",
    difficulty: "Medium",
    points: 60,
    status: "Solved",
    category: ["Dynamic Programming"],
    saved: false,
    description: "We have been given N balloons, each with a number of coins associated with it. On bursting a balloon i, the number of coins gained is equal to A[i-1]*A[i]*A[i+1]. Also, balloons i-1 and i+1 now become adjacent. Find the maximum possible profit earned after bursting all the balloons. Assume an extra 1 at each boundary. A recursive solution is discussed here. We can solve this problem using dynamic programming. First, consider a sub-array from indices Left to Right(inclusive). If we assume the balloon at index Last to be the last balloon to be burst in this sub-array, we would say the coined gained to be-A[left-1]*A[last]*A[right+1]. Also, the total Coin Gained would be this value, plus dp[left][last – 1] + dp[last + 1][right], where dp[i][j] means maximum coin gained for sub-array with indices i, j. Therefore, for each value of Left and Right, we need find and choose a value of Last with maximum coin gained, and update the dp array. Our Answer is the value at dp[1][N]."
  },
  {
    name: "String Subsequences",
    difficulty: "Medium",
    points: 50,
    status: "Unsolved",
    category: ["Dynamic Programming", "Strings"],
    saved: false,
    description: "Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., \"ace\" is a subsequence of \"abcde\" while \"aec\" is not)."
  },
  {
    name: "Rainwater Trapping",
    difficulty: "Hard",
    points: 100,
    status: "Unsolved",
    category: ["Dynamic Programming", "Arrays"],
    saved: true,
    description: "The key idea to solve this problem is to understand that rainwater can only be trapped if there exists a block of greater height, both on the left and the right side than the current block. Then rainwater can be trapped on top of the block. So, it can be easily inferred that the amount of water a block can hold is equal to the minimum of the maximum height present on both the left and right half minus the height of the current block."
  },  
  {
    name: "String Concatenate",
    difficulty: "Easy",
    points: 30,
    status: "Solved",
    category: ["Strings"],
    saved: false,
    description: "Given a list of unique strings, if the last char at string A match first char at string B then you can append them together: good+dog -> goodog . Now return the longest possible string (length of concatenated String, not the string number). Example: {good, dog, doog, xyhhdgy} --> dogoodoog"
  },
  {
    name: "Balanced Parantheses",
    difficulty: "Medium",
    points: 50,
    status: "Unsolved",
    category: ["Stacks"],
    saved: false,
    description: "Balanced Brackets, also known as Balanced Parentheses, is a common programming problem. In this tutorial, we will validate whether the brackets in a given string are balanced or not. This type of strings are part of what's known as the Dyck language. A bracket is considered to be any of the following characters – “(“, “)”, “[“, “]”, “{“, “}”. A set of brackets is considered to be a matched pair if an opening bracket, “(“, “[“, and “{“, occurs to the left of the corresponding closing bracket, “)”, “]”,  and “}”, respectively."
  }  
]

export default ProblemDetails