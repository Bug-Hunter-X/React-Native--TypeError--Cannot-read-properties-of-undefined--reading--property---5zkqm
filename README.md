# React Native: TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common React Native error and its solution. The error, `TypeError: Cannot read properties of undefined (reading 'property')`, occurs when attempting to access a property of an object that is currently null or undefined.  This frequently happens when dealing with asynchronous data fetching.

## Problem
The `bug.js` file contains code that attempts to render data from an API call before the data has been fully fetched. This results in the error because the object is undefined initially.

## Solution
The `bugSolution.js` file demonstrates the solution.  By using optional chaining (`?.`) and nullish coalescing (`??`), we gracefully handle cases where the data is still loading or absent. This prevents the error and provides a more robust user experience.