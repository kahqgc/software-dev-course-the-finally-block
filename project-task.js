/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

// ○ Missing file names.
// ○ File data that is not a string.
// ○ Invalid file operations (e.g., attempting to process a file with invalid
// data).

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if (!fileName) {
      throw new Error("File Name cannot be empty.");
    }
    if (typeof fileData !== "string" || fileData.trim() === "") {
      throw new TypeError("Incorrect data type.");
    }

    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // TODO: Add simulated file operations (reading/writing)
  } catch (err) {
    // TODO: Implement error handling
    console.error(err);
  } finally {
    console.log("Closing resources.");
  }
}

// let processFileSystem = [];

// function processFile(fileName, fileData) {
//   try {
//     // TODO: Add input validation here
//     if (!fileName) {
//       throw new ReferenceError("File name is missing")
//     }
//     if (typeof fileData !== "string" || fileData.trim() ==="") {
//       throw new TypeError("Please input a string");
//     }

//     if (fileData === "" || fileData === undefined) {
//       throw new Error("File data cannot be empty");
//     }
//     console.log(`Processing file: ${fileName} with ${fileData}`)

//     if (fileData === !isNaN){
//       throw new Error("Incorrect data type")
//     }
//   }
//   catch (err) {
//     console.log(`${err.name}: ${err.message}`)
//   }
//   finally {
//     console.log("File process complete");
//   }
// }

// // // TODO: Implement simulated file processing here
// console.log(`Processing file: ${fileName}`);
// console.log(`File content: ${fileData}`);

// TODO: Add simulated file operations (reading/writing)

//   } catch (err) {
//     // TODO: Implement error handling
//     console.error(err);
//   }
//   // TODO: Implement a finally block to close resources
// }

// ============================================
// 🧪 Test Cases Below
// ============================================

console.log("example1");
processFile();
console.log("2") // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42);
console.log("3") // ❌ TypeError: File data must be a string
processFile("myFile.txt", "");
console.log("4") // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
