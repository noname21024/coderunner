window.LESSONS_PART_1 = [
    // JavaScript
    {
        id: 'js-1', language: 'JavaScript', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Array Methods Chain',
        code: `const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst processed = data\n  .filter(n => n % 2 === 0)\n  .map(n => n * n)\n  .reduce((acc, curr) => acc + curr, 0);\n\nconsole.log(\`Processed Result: \${processed}\`);\n\n// Expected output: 220`
    },
    {
        id: 'js-2', language: 'JavaScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Async/Await Fetch',
        code: `async function fetchUserData(userId) {\n  try {\n    const response = await fetch(\`/api/users/\${userId}\`);\n    \n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    \n    const userData = await response.json();\n    return userData;\n  } catch (error) {\n    console.error('There was a problem:', error);\n    return null;\n  }\n}`
    },
    {
        id: 'js-3', language: 'JavaScript', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Debounce Function',
        code: `function debounce(func, timeout = 300) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      func.apply(this, args);\n    }, timeout);\n  };\n}\n\nconst saveInput = debounce((text) => {\n  console.log('Saving data:', text);\n});`
    },
    {
        id: 'js-4', language: 'JavaScript', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Object Destructuring',
        code: `const user = {\n  id: 42,\n  displayName: 'jdoe',\n  fullName: {\n    firstName: 'John',\n    lastName: 'Doe'\n  }\n};\n\nfunction userId({ id, displayName, fullName: { firstName } }) {\n  return \`User \${id} is \${firstName} (\${displayName})\`;\n}\n\nconsole.log(userId(user));`
    },
    {
        id: 'js-5', language: 'JavaScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Class Implementation',
        code: `class Rectangle {\n  constructor(height, width) {\n    this.height = height;\n    this.width = width;\n  }\n\n  get area() {\n    return this.calcArea();\n  }\n\n  calcArea() {\n    return this.height * this.width;\n  }\n\n  *getSides() {\n    yield this.height;\n    yield this.width;\n    yield this.height;\n    yield this.width;\n  }\n}`
    },
    {
        id: 'js-6', language: 'JavaScript', type: 'code', difficulty: 'Hard', timeLimit: 120, title: 'Quick Sort Implementation',
        code: `function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n\n  const pivot = arr[arr.length - 1];\n  const left = [];\n  const right = [];\n\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] < pivot) {\n      left.push(arr[i]);\n    } else {\n      right.push(arr[i]);\n    }\n  }\n\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}`
    },
    {
        id: 'js-7', language: 'JavaScript', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Event Listener Pattern',
        code: `const button = document.querySelector('#myBtn');\n\nbutton.addEventListener('click', function(e) {\n  e.preventDefault();\n  this.classList.toggle('active');\n  \n  const detail = e.detail;\n  console.log(\`Clicked \${detail} times\`);\n}, { once: true });`
    },
    {
        id: 'js-8', language: 'JavaScript', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Deep Clone Utility',
        code: `function deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') return obj;\n  \n  if (Array.isArray(obj)) {\n    return obj.map(item => deepClone(item));\n  }\n  \n  const cloned = {};\n  for (let key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      cloned[key] = deepClone(obj[key]);\n    }\n  }\n  return cloned;\n}`
    },
    {
        id: 'js-9', language: 'JavaScript', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Promise.all usage',
        code: `const p1 = Promise.resolve(3);\nconst p2 = 42;\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'foo');\n});\n\nPromise.all([p1, p2, p3]).then((values) => {\n  console.log(values);\n  // expected output: Array [3, 42, "foo"]\n});`
    },
    {
        id: 'js-10', language: 'JavaScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Custom Hook (React)',
        code: `import { useState, useEffect } from 'react';\n\nfunction useWindowSize() {\n  const [size, setSize] = useState({ width: 0, height: 0 });\n\n  useEffect(() => {\n    function updateSize() {\n      setSize({ width: window.innerWidth, height: window.innerHeight });\n    }\n    \n    window.addEventListener('resize', updateSize);\n    updateSize();\n    \n    return () => window.removeEventListener('resize', updateSize);\n  }, []);\n\n  return size;\n}`
    },
    // Python
    {
        id: 'py-1', language: 'Python', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'List Comprehension',
        code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Create a list of squares for even numbers\nsquares = [x**2 for x in numbers if x % 2 == 0]\n\nprint(f"Original: {numbers}")\nprint(f"Squares: {squares}")`
    },
    {
        id: 'py-2', language: 'Python', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'File Handling Context',
        code: `def process_log_file(filepath):\n    try:\n        with open(filepath, 'r', encoding='utf-8') as file:\n            for line_num, line in enumerate(file, 1):\n                if 'ERROR' in line:\n                    print(f"Line {line_num}: {line.strip()}")\n    except FileNotFoundError:\n        print("Error: The file was not found.")\n    except Exception as e:\n        print(f"An error occurred: {e}")`
    },
    {
        id: 'py-3', language: 'Python', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Class & Dunder Methods',
        code: `class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __mul__(self, scalar):\n        return Vector(self.x * scalar, self.y * scalar)`
    },
    {
        id: 'py-4', language: 'Python', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Dictionary Manipulation',
        code: `users = [\n    {"id": 1, "name": "Alice", "role": "Admin"},\n    {"id": 2, "name": "Bob", "role": "User"},\n    {"id": 3, "name": "Charlie", "role": "User"}\n]\n\nuser_lookup = {u["id"]: u for u in users}\n\ndef get_user_name(user_id):\n    return user_lookup.get(user_id, {}).get("name", "Unknown")`
    },
    {
        id: 'py-5', language: 'Python', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Decorator Pattern',
        code: `import time\nimport functools\n\ndef timer_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start_time = time.perf_counter()\n        value = func(*args, **kwargs)\n        end_time = time.perf_counter()\n        run_time = end_time - start_time\n        print(f"Finished {func.__name__!r} in {run_time:.4f} secs")\n        return value\n    return wrapper`
    },
    {
        id: 'py-6', language: 'Python', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Lambda & Map',
        code: `temps_celsius = [0, 10, 20, 30, 40]\n\ntemps_fahrenheit = list(map(lambda c: (c * 9/5) + 32, temps_celsius))\n\nprint(temps_fahrenheit)\n# Output: [32.0, 50.0, 68.0, 86.0, 104.0]`
    },
    {
        id: 'py-7', language: 'Python', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'FastAPI Route (Mock)',
        code: `from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post("/items/")\nasync def create_item(item: Item):\n    if item.price < 0:\n        raise HTTPException(status_code=400, detail="Price must be positive")\n    return item`
    },
    {
        id: 'py-8', language: 'Python', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Pandas Data Analysis',
        code: `import pandas as pd\n\ndef analyze_sales(csv_path):\n    df = pd.read_csv(csv_path)\n    \n    # Group by region and sum sales\n    regional_sales = df.groupby('Region')['Sales'].sum().reset_index()\n    \n    # Sort by sales descending\n    top_regions = regional_sales.sort_values(by='Sales', ascending=False)\n    \n    return top_regions.head(5)`
    },
    {
        id: 'py-9', language: 'Python', type: 'code', difficulty: 'Medium', timeLimit: 70, title: 'Generator Function',
        code: `def fibonacci_generator(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci_generator(100):\n    print(num, end=", ")`
    },
    {
        id: 'py-10', language: 'Python', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Set Operations',
        code: `set_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\nintersection = set_a.intersection(set_b)\nunion = set_a.union(set_b)\ndifference = set_a.difference(set_b)\n\nprint(f"Common: {intersection}")`
    },
    // TypeScript
    {
        id: 'ts-1', language: 'TypeScript', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Basic Interface',
        code: `interface User {\n  id: number;\n  username: string;\n  email?: string;\n  readonly createdAt: Date;\n}\n\nconst newUser: User = {\n  id: 1,\n  username: "coder123",\n  createdAt: new Date()\n};\n\nfunction printUser(u: User): void {\n  console.log(\`User \${u.username} joined at \${u.createdAt}\`);\n}`
    },
    {
        id: 'ts-2', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Generics Usage',
        code: `interface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\nasync function fetchData<T>(url: string): Promise<ApiResponse<T>> {\n  const response = await fetch(url);\n  const json = await response.json();\n  return {\n    data: json as T,\n    status: response.status,\n    message: response.statusText\n  };\n}`
    },
    {
        id: 'ts-3', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Union Types & Guards',
        code: `type NetworkState = \n  | { state: 'loading' }\n  | { state: 'failed'; code: number }\n  | { state: 'success'; response: { title: string } };\n\nfunction logger(s: NetworkState) {\n  switch (s.state) {\n    case 'loading':\n      return 'Downloading...';\n    case 'failed':\n      return \`Error \${s.code}\`;\n    case 'success':\n      return \`Downloaded \${s.response.title}\`;\n  }\n}`
    },
    {
        id: 'ts-4', language: 'TypeScript', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Utility Types',
        code: `interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, "title" | "completed">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false,\n};\n\ntype TodoConfig = Record<string, Omit<Todo, "description">>;`
    },
    {
        id: 'ts-5', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Enum & Switch',
        code: `enum LogLevel {\n  ERROR,\n  WARN,\n  INFO,\n  DEBUG\n}\n\nfunction printLog(level: LogLevel, message: string) {\n  const timestamp = new Date().toISOString();\n  if (level === LogLevel.ERROR) {\n    console.error(\`[\${timestamp}] ERROR: \${message}\`);\n  } else {\n    console.log(\`[\${timestamp}] \${message}\`);\n  }\n}`
    },
    {
        id: 'ts-6', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Abstract Class',
        code: `abstract class Department {\n  constructor(public name: string) {}\n\n  printName(): void {\n    console.log("Department name: " + this.name);\n  }\n\n  abstract printMeeting(): void;\n}\n\nclass AccountingDepartment extends Department {\n  printMeeting(): void {\n    console.log("The Accounting Department meets each Monday at 10am.");\n  }\n}`
    },
    {
        id: 'ts-7', language: 'TypeScript', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Mapped Types',
        code: `type OptionsFlags<Type> = {\n  [Property in keyof Type]: boolean;\n};\n\ntype FeatureFlags = {\n  darkMode: () => void;\n  newUserProfile: () => void;\n};\n\ntype FeatureOptions = OptionsFlags<FeatureFlags>;\n// type FeatureOptions = { darkMode: boolean; newUserProfile: boolean; }`
    },
    {
        id: 'ts-8', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Type Intersection',
        code: `interface ErrorHandling {\n  success: boolean;\n  error?: { message: string };\n}\n\ninterface ArtworksData {\n  artworks: { title: string }[];\n}\n\ntype ArtworksResponse = ArtworksData & ErrorHandling;\n\nconst handleArtistsResponse = (response: ArtworksResponse) => {\n  if (response.error) {\n    console.error(response.error.message);\n    return;\n  }\n  console.log(response.artworks);\n};`
    },
    {
        id: 'ts-9', language: 'TypeScript', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Optional Chaining',
        code: `const adventurer = {\n  name: 'Alice',\n  cat: {\n    name: 'Dinah'\n  }\n};\n\nconst dogName = adventurer.dog?.name;\nconsole.log(dogName);\n// expected output: undefined\n\nconsole.log(adventurer.someNonExistentMethod?.());\n// expected output: undefined`
    },
    {
        id: 'ts-10', language: 'TypeScript', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Module augmentation',
        code: `// Ensure this is treated as a module\nexport {};\n\ndeclare global {\n  interface Window {\n    myCustomProperty: string;\n  }\n}\n\nwindow.myCustomProperty = "Hello world";\nconsole.log(window.myCustomProperty);`
    },
    // Go
    {
        id: 'go-1', language: 'Go', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Basic Struct',
        code: `package main\n\nimport "fmt"\n\ntype Person struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    p := Person{Name: "Alice", Age: 30}\n    fmt.Printf("Name: %s, Age: %d\\n", p.Name, p.Age)\n}`
    },
    {
        id: 'go-2', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Goroutines & Channels',
        code: `package main\n\nimport "fmt"\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        fmt.Println("worker", id, "processing job", j)\n        results <- j * 2\n    }\n}\n\nfunc main() {\n    jobs := make(chan int, 100)\n    results := make(chan int, 100)\n\n    go worker(1, jobs, results)\n    \n    jobs <- 1\n    jobs <- 2\n    close(jobs)\n}`
    },
    {
        id: 'go-3', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Interfaces',
        code: `package main\n\nimport ("fmt"; "math")\n\ntype Geometry interface {\n    Area() float64\n    Perim() float64\n}\n\ntype Rect struct {\n    width, height float64\n}\n\nfunc (r Rect) Area() float64 {\n    return r.width * r.height\n}\n\nfunc measure(g Geometry) {\n    fmt.Println(g)\n    fmt.Println(g.Area())\n}`
    },
    {
        id: 'go-4', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'HTTP Handler',
        code: `package main\n\nimport (\n    "fmt"\n    "net/http"\n)\n\nfunc hello(w http.ResponseWriter, req *http.Request) {\n    fmt.Fprintf(w, "hello\\n")\n}\n\nfunc main() {\n    http.HandleFunc("/hello", hello)\n    http.ListenAndServe(":8090", nil)\n}`
    },
    {
        id: 'go-5', language: 'Go', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Defer Panic Recover',
        code: `package main\n\nimport "fmt"\n\nfunc mayPanic() {\n    panic("a problem")\n}\n\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("Recovered. Error:\\n", r)\n        }\n    }()\n    \n    mayPanic()\n    fmt.Println("After panic")\n}`
    },
    {
        id: 'go-6', language: 'Go', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Slices',
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n    s := make([]string, 3)\n    s[0] = "a"\n    s[1] = "b"\n    s[2] = "c"\n    \n    s = append(s, "d")\n    s = append(s, "e", "f")\n    \n    fmt.Println("sl:", s)\n    fmt.Println("len:", len(s))\n}`
    },
    {
        id: 'go-7', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'JSON Marshaling',
        code: `package main\n\nimport (\n    "encoding/json"\n    "fmt"\n)\n\ntype Response struct {\n    Page   int      \`json:"page"\`\n    Fruits []string \`json:"fruits"\`\n}\n\nfunc main() {\n    res := &Response{\n        Page:   1,\n        Fruits: []string{"apple", "peach", "pear"}}\n    \n    bolB, _ := json.Marshal(res)\n    fmt.Println(string(bolB))\n}`
    },
    {
        id: 'go-8', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Mutex Sync',
        code: `package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\ntype Container struct {\n    mu       sync.Mutex\n    counters map[string]int\n}\n\nfunc (c *Container) inc(name string) {\n    c.mu.Lock()\n    defer c.mu.Unlock()\n    c.counters[name]++\n}`
    },
    {
        id: 'go-9', language: 'Go', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Range Loop',
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n    nums := []int{2, 3, 4}\n    sum := 0\n    for _, num := range nums {\n        sum += num\n    }\n    \n    kvs := map[string]string{"a": "apple", "b": "banana"}\n    for k, v := range kvs {\n        fmt.Printf("%s -> %s\\n", k, v)\n    }\n}`
    },
    {
        id: 'go-10', language: 'Go', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Worker Pools',
        code: `package main\n\nimport "fmt"\nimport "time"\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        fmt.Println("worker", id, "started  job", j)\n        time.Sleep(time.Second)\n        fmt.Println("worker", id, "finished job", j)\n        results <- j * 2\n    }\n}`
    }
];
