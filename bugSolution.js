The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access object properties.

```javascript
//Solution Code
const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'Loading...'}</Text> 
    </View>
  );
};
```

Optional chaining (`?.`) short-circuits the evaluation if `user` is null or undefined. The nullish coalescing operator (`??`) provides a default value ('Loading...' in this case) if `user?.name` is null or undefined.