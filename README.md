# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The issue stems from adding `count` to the dependency array of `useEffect`.  This causes the effect to run every time `count` changes.  Within the effect, `count` is updated, triggering another re-render and another execution of the effect, resulting in an infinite loop.

## Solution

The solution involves understanding how to correctly use the dependency array. If no dependencies are needed, use an empty array `[]`. If you need to update `count` based on external data or state, add those variables to the dependency array. In this case, the effect was intended to run only once after the component mounts, thus the solution uses an empty array. 