```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This effect runs only once after the component mounts
    // Simulate an asynchronous operation
    const intervalID = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```