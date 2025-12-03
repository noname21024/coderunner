window.LESSONS_PART_2 = [
    // Rust
    {
        id: 'rs-1', language: 'Rust', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Hello World & Variables',
        code: `fn main() {\n    let x = 5;\n    let y = 10;\n    \n    println!("x = {} and y = {}", x, y);\n    \n    let mut z = 15;\n    z = z + x;\n    println!("Total is {}", z);\n}`
    },
    {
        id: 'rs-2', language: 'Rust', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Ownership & Moving',
        code: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1;\n    \n    // println!("{}, world!", s1); // This would error\n    println!("{}, world!", s2);\n    \n    let s3 = s2.clone();\n    println!("s2 = {}, s3 = {}", s2, s3);\n}`
    },
    {
        id: 'rs-3', language: 'Rust', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Structs & Impl',
        code: `struct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n    \n    fn can_hold(&self, other: &Rectangle) -> bool {\n        self.width > other.width && self.height > other.height\n    }\n}`
    },
    {
        id: 'rs-4', language: 'Rust', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Enum Match & Options',
        code: `enum Coin {\n    Penny,\n    Nickel,\n    Dime,\n    Quarter,\n}\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}`
    },
    {
        id: 'rs-5', language: 'Rust', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Vectors and Iterators',
        code: `fn main() {\n    let v = vec![1, 2, 3];\n    let v2: Vec<_> = v.iter().map(|x| x + 1).collect();\n    \n    for i in &v2 {\n        println!("{}", i);\n    }\n    \n    let third: &i32 = &v[2];\n    println!("The third element is {}", third);\n}`
    },
    {
        id: 'rs-6', language: 'Rust', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Error Handling (Result)',
        code: `use std::fs::File;\nuse std::io::ErrorKind;\n\nfn main() {\n    let f = File::open("hello.txt");\n\n    let f = match f {\n        Ok(file) => file,\n        Err(error) => match error.kind() {\n            ErrorKind::NotFound => match File::create("hello.txt") {\n                Ok(fc) => fc,\n                Err(e) => panic!("Problem creating the file: {:?}", e),\n            },\n            other_error => panic!("Problem opening the file: {:?}", other_error),\n        },\n    };\n}`
    },
    {
        id: 'rs-7', language: 'Rust', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Traits',
        code: `pub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\nimpl Summary for NewsArticle {\n    fn summarize(&self) -> String {\n        format!("{}, by {} ({})", self.headline, self.author, self.location)\n    }\n}`
    },
    {
        id: 'rs-8', language: 'Rust', type: 'code', difficulty: 'Hard', timeLimit: 120, title: 'Lifetimes',
        code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n\nfn main() {\n    let string1 = String::from("long string is long");\n    let result;\n    {\n        let string2 = String::from("xyz");\n        result = longest(string1.as_str(), string2.as_str());\n        println!("The longest string is {}", result);\n    }\n}`
    },
    {
        id: 'rs-9', language: 'Rust', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'HashMap',
        code: `use std::collections::HashMap;\n\nfn main() {\n    let mut scores = HashMap::new();\n\n    scores.insert(String::from("Blue"), 10);\n    scores.insert(String::from("Yellow"), 50);\n\n    for (key, value) in &scores {\n        println!("{}: {}", key, value);\n    }\n}`
    },
    {
        id: 'rs-10', language: 'Rust', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Threads',
        code: `use std::thread;\nuse std::time::Duration;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        for i in 1..10 {\n            println!("hi number {} from the spawned thread!", i);\n            thread::sleep(Duration::from_millis(1));\n        }\n    });\n\n    for i in 1..5 {\n        println!("hi number {} from the main thread!", i);\n        thread::sleep(Duration::from_millis(1));\n    }\n\n    handle.join().unwrap();\n}`
    },
    // Java
    {
        id: 'java-1', language: 'Java', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Basic Main Class',
        code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        int a = 5;\n        int b = 10;\n        System.out.println("Sum: " + (a + b));\n    }\n}`
    },
    {
        id: 'java-2', language: 'Java', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'ArrayList Operations',
        code: `import java.util.ArrayList;\n\npublic class ListDemo {\n    public static void main(String[] args) {\n        ArrayList<String> cars = new ArrayList<String>();\n        cars.add("Volvo");\n        cars.add("BMW");\n        cars.add("Ford");\n        \n        for (String i : cars) {\n            System.out.println(i);\n        }\n        System.out.println("Size: " + cars.size());\n    }\n}`
    },
    {
        id: 'java-3', language: 'Java', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'Interface Definition',
        code: `interface Animal {\n    public void animalSound();\n    public void sleep();\n}\n\nclass Pig implements Animal {\n    public void animalSound() {\n        System.out.println("The pig says: wee wee");\n    }\n    public void sleep() {\n        System.out.println("Zzz");\n    }\n}`
    },
    {
        id: 'java-4', language: 'Java', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Stream API',
        code: `import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Reflection", "Collection", "Stream");\n        List<String> result = names.stream()\n            .filter(s -> s.startsWith("S"))\n            .collect(Collectors.toList());\n        System.out.println(result);\n    }\n}`
    },
    {
        id: 'java-5', language: 'Java', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Try-Catch Block',
        code: `public class ErrorHandler {\n    public static void main(String[] args) {\n        try {\n            int[] myNumbers = {1, 2, 3};\n            System.out.println(myNumbers[10]);\n        } catch (Exception e) {\n            System.out.println("Something went wrong.");\n        } finally {\n            System.out.println("The 'try catch' is finished.");\n        }\n    }\n}`
    },
    {
        id: 'java-6', language: 'Java', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'HashMap Usage',
        code: `import java.util.HashMap;\n\npublic class MapExample {\n    public static void main(String[] args) {\n        HashMap<String, String> capitalCities = new HashMap<String, String>();\n        capitalCities.put("England", "London");\n        capitalCities.put("Germany", "Berlin");\n        capitalCities.put("Norway", "Oslo");\n        \n        System.out.println(capitalCities.get("England"));\n        capitalCities.remove("England");\n    }\n}`
    },
    {
        id: 'java-7', language: 'Java', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Singleton Pattern',
        code: `public class Singleton {\n    private static Singleton single_instance = null;\n    public String s;\n\n    private Singleton() {\n        s = "Hello I am a string part of Singleton class";\n    }\n\n    public static Singleton getInstance() {\n        if (single_instance == null)\n            single_instance = new Singleton();\n        return single_instance;\n    }\n}`
    },
    {
        id: 'java-8', language: 'Java', type: 'code', difficulty: 'Easy', timeLimit: 70, title: 'Enhanced For Loop',
        code: `public class LoopDemo {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        int sum = 0;\n\n        for(int x : numbers) {\n             sum += x;\n             System.out.print(x + ",");\n        }\n        System.out.println("\\nTotal: " + sum);\n    }\n}`
    },
    {
        id: 'java-9', language: 'Java', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'File Reading',
        code: `import java.io.File;\nimport java.util.Scanner;\nimport java.io.FileNotFoundException;\n\npublic class ReadFile {\n  public static void main(String[] args) {\n    try {\n      File myObj = new File("filename.txt");\n      Scanner myReader = new Scanner(myObj);\n      while (myReader.hasNextLine()) {\n        String data = myReader.nextLine();\n        System.out.println(data);\n      }\n      myReader.close();\n    } catch (FileNotFoundException e) {\n      e.printStackTrace();\n    }\n  }\n}`
    },
    {
        id: 'java-10', language: 'Java', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'Generic Class',
        code: `public class Box<T> {\n   private T t;\n\n   public void add(T t) {\n      this.t = t;\n   }\n\n   public T get() {\n      return t;\n   }\n\n   public static void main(String[] args) {\n      Box<Integer> integerBox = new Box<Integer>();\n      integerBox.add(new Integer(10));\n      System.out.printf("Integer Value :%d\\n", integerBox.get());\n   }\n}`
    },
    // C++
    {
        id: 'cpp-1', language: 'C++', type: 'code', difficulty: 'Easy', timeLimit: 60, title: 'Hello World',
        code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    int number = 42;\n    std::cout << "The answer is " << number << std::endl;\n    return 0;\n}`
    },
    {
        id: 'cpp-2', language: 'C++', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Pointers Basic',
        code: `#include <iostream>\n\nint main() {\n    int var = 20;\n    int *ip;\n    \n    ip = &var;\n    \n    std::cout << "Value of var variable: ";\n    std::cout << var << std::endl;\n    \n    std::cout << "Address stored in ip variable: ";\n    std::cout << ip << std::endl;\n    \n    std::cout << "Value of *ip variable: ";\n    std::cout << *ip << std::endl;\n    return 0;\n}`
    },
    {
        id: 'cpp-3', language: 'C++', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Class Definition',
        code: `#include <iostream>\n\nclass Box {\n   public:\n      double length; \n      double breadth;\n      double height;\n      \n      double getVolume(void) {\n         return length * breadth * height;\n      }\n};\n\nint main() {\n   Box Box1;\n   Box1.height = 5.0; \n   Box1.length = 6.0; \n   Box1.breadth = 7.0;\n   std::cout << "Volume of Box1 : " << Box1.getVolume() <<std::endl;\n   return 0;\n}`
    },
    {
        id: 'cpp-4', language: 'C++', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Vector Iteration',
        code: `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> g1;\n\n    for (int i = 1; i <= 5; i++)\n        g1.push_back(i);\n\n    std::cout << "Output of begin and end: ";\n    for (auto i = g1.begin(); i != g1.end(); ++i)\n        std::cout << *i << " ";\n\n    std::cout << "\\nSize : " << g1.size();\n    std::cout << "\\nCapacity : " << g1.capacity();\n    return 0;\n}`
    },
    {
        id: 'cpp-5', language: 'C++', type: 'code', difficulty: 'Medium', timeLimit: 80, title: 'References',
        code: `#include <iostream>\n\nvoid swap(int& x, int& y) {\n    int temp;\n    temp = x;\n    x = y;\n    y = temp;\n}\n\nint main() {\n    int a = 100;\n    int b = 200;\n\n    std::cout << "Before swap, a: " << a << std::endl;\n    swap(a, b);\n    std::cout << "After swap, a: " << a << std::endl;\n    return 0;\n}`
    },
    {
        id: 'cpp-6', language: 'C++', type: 'code', difficulty: 'Hard', timeLimit: 100, title: 'File Write',
        code: `#include <iostream>\n#include <fstream>\n\nint main () {\n  std::ofstream myfile ("example.txt");\n  if (myfile.is_open())\n  {\n    myfile << "This is a line.\\n";\n    myfile << "This is another line.\\n";\n    myfile.close();\n  }\n  else std::cout << "Unable to open file";\n  return 0;\n}`
    },
    {
        id: 'cpp-7', language: 'C++', type: 'code', difficulty: 'Medium', timeLimit: 90, title: 'Function Templates',
        code: `#include <iostream>\n\ntemplate <typename T>\nT myMax(T x, T y) {\n   return (x > y) ? x : y;\n}\n\nint main() {\n   std::cout << myMax<int>(3, 7) << std::endl;\n   std::cout << myMax<double>(3.0, 7.0) << std::endl;\n   std::cout << myMax<char>('g', 'e') << std::endl;\n   return 0;\n}`
    },
    {
        id: 'cpp-8', language: 'C++', type: 'code', difficulty: 'Hard', timeLimit: 120, title: 'Inheritance',
        code: `#include <iostream>\n\nclass Shape {\n   protected:\n      int width, height;\n   public:\n      void setValues(int a, int b) { width=a; height=b; }\n};\n\nclass Rectangle: public Shape {\n   public:\n      int area() { return width * height; }\n};\n\nint main () {\n   Rectangle rect;\n   rect.setValues(5,10);\n   std::cout << "area: " << rect.area() << std::endl;\n   return 0;\n}`
    },
    {
        id: 'cpp-9', language: 'C++', type: 'code', difficulty: 'Medium', timeLimit: 100, title: 'Map Container',
        code: `#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> m;\n    m["hello"] = 23;\n    m["world"] = 45;\n\n    for (const auto& [key, value] : m) {\n        std::cout << key << " has value " << value << std::endl;\n    }\n    \n    if (m.find("world") != m.end()) {\n        std::cout << "Found world!" << std::endl;\n    }\n    return 0;\n}`
    },
    {
        id: 'cpp-10', language: 'C++', type: 'code', difficulty: 'Hard', timeLimit: 110, title: 'Smart Pointers',
        code: `#include <iostream>\n#include <memory>\n\nclass Entity {\npublic:\n    Entity() { std::cout << "Created Entity!" << std::endl; }\n    ~Entity() { std::cout << "Destroyed Entity!" << std::endl; }\n    void Print() { std::cout << "Printing..." << std::endl; }\n};\n\nint main() {\n    {\n        std::unique_ptr<Entity> entity = std::make_unique<Entity>();\n        entity->Print();\n    }\n    return 0;\n}`
    }
];
