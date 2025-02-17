```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // count is in the dependency array, causing an infinite re-render

  return <div>Count: {count}</div>;
}
```