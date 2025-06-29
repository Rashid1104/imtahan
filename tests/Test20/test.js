// 1)
// function checkCheckbox() {
// const Check = document.getElementById("isChecked").checked

// if (Check) {
//     console.log("да"); 
// }else{
// console.log("нет");
// }
// }

// 2)

// function Selection() {
//     let MySelect = document.getElementById("asSelect")

// let SelectText = MySelect.options[MySelect.selectedIndex].text


// console.log(SelectText);
// }

// 3)

// function NewLi() {
//     const Input = document.getElementById("newLiOn")
    

//     let text = Input.value.trim()

// if(text !== ""){
//     const li = document.createElement("li")
//     li.textContent = text
//      document.getElementById("sigma").appendChild(li)
//      Input.value = ""
// }else{
//     alert("ОХУЕЛ")
// }

   
// }

// 4)

// function Clear() {
//     document.getElementById("textinput").value = ""

//     document.getElementById("textarea").value = ""
    
// }

// 5)

// function ChangeImg() {
    
//     document.getElementById("OldImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTbHmpYnOBIILXrqj_hQ32Tyz2dSTyzybHw&s"
// }

// 6)

// function ChangeColor() {

//     document.getElementById("box").style.backgroundColor = "red"
    
// }

// 7)

// function ChangeSize() {
    
//     document.getElementById("box").style.width = "500px"
//     document.getElementById("box").style.height = "500px"
// }

// 8)

// function ChangeColor() {
//   document.getElementById("text").style.color = "red"  
// }

// 9)

// function ChangeFontSize() {
//   document.getElementById("new").style.fontSize = "40px"
// }

// 10)

// function Hide(){
//   document.getElementById("hide").style.visibility = "hidden"
// }

// 11)

// function HiddenImg() {
//   document.getElementById("hide").style.opacity = "0.5"
// }

// 12)

// function ChangeAll() {
//   document.getElementById("change").style.border  = " 10px blue dashed"
// }

// 13)

// function ChangeSize() {

// document.getElementById("change").style.textAlign = "center"
  
// }

// 14)

// function ChangeSize() {
//   document.getElementById("change").style.width = "600px"
//   document.getElementById("change").style.height = "600px"
// }

// 15)

// function clickOn() {
//   document.getElementById("click").style.display = "block"

//   // alert("молодец!!!")
// }

// 16)

// function ChangeText() {

//   document.getElementById("Input1").addEventListener("input",function () {
//      document.getElementById("Input2").value = this.value
//   })
  
// }

// 17)

// function Change() {
//   document.body.style.backgroundColor = "gray"
// }

// 18)

// document.getElementById("Onclick").click()

// 19)

// function Hello() {
//   let name = prompt("КАК тебя зовут?")

// alert("ПРИВЕТ " + name + " !!!")
// }

// 20)

// function Sum() {
//  let a = +document.getElementById("num1").value 
//  let b = +document.getElementById("num2").value 
  
// let sum = a + b
//  alert("Сумма: " + sum)
// }

// 21)

// document.getElementById("click").addEventListener("click",()=>{
//   let numbers = [10, 20, 30, 40, 50];

// alert("Длина: " + numbers.length)
// })

// 22)

// document.getElementById("click").addEventListener("click",()=>{ 
//   let num = []

//   for (let index = 1; index <= 10; index++) {
  

//    num.push(index)
    
//   }
// alert("Массив от 1 до 10: " + num)
// })

// 23)

// function Numbers() {
//  let a = +document.getElementById("num").value

//  if(a % 2 === 0){
//   alert("Четное")
//  }else{
//   alert("НЕчетное")
//  }
// }

// 24)

// function Numbers() {
//  let a = +document.getElementById("num1").value
//  let b = +document.getElementById("num2").value

//  if(a > b){
//   alert("a больше b")
//  }else if(a === b){
//   alert("a ровно b")
//  }else{
//   alert("a меньше b")
//  }
 
// }

// 25)

// function Square() {
//   let a = +document.getElementById("num").value

//   let square = a**2

//   alert("Вот квадрат: " + square)


  
// }

// 26)

// document.getElementById("click").addEventListener("click",()=>{
//   let num = [];
//   let i = 10

//   while(i >= 1){
//     num.push(i)
//     i--;
//   }
//   alert("ВОТ: " + num)
// })

// 27)

// function TEXT() {

//   let a = document.getElementById("text").value
//  let lower = a.toLowerCase().replace(/\/s/g,'')

//   if (lower === lower.split('').reverse().join('')) {
//     alert("да")
//   }else{
//     alert("нет")
//   }

// }

// 28)

// function Orta() {
//   let num = [40,50,70,100,10];
 
//   let sum = 0

//   for (let i = 0; i < num.length; i++) {
//    sum += num[i]
    
//   }

//   let average = sum / num.length

//   alert("Среднее значение массива: " + average)
// }

// 29)

// function Weeks() {

//   let num = +document.getElementById("num").value
  
//   switch (num) {
//        case 1: return alert("Понедельник") ;
//     case 2: return alert("Вторник") ;
//     case 3: return alert("Среда") ;
//     case 4: return alert("Четверг") ;
//     case 5: return  alert("Пятница");
//     case 6: return alert("Суббота");
//     case 7: return alert("Воскресенье");

//     default:
//       alert("Нету такого!!!")
//       break;
//   }
// }

// 30)

// function Sum() {
//   let nums = [1,6,12,2,33,55,189,24]
//   let sum = 0

//   for (let i = 0; i < nums.length; i++) {
// if(nums[i] % 2 === 0){
// sum += nums[i]
// }
    
//   }
//   alert("ВОТ СУММА: " + sum)
// }

// 31)

// function Two() {
//   let nums = [1,6,12,2,33,55,189,24]
//   let numsx2 = []
 

//   for (let i = 0; i < nums.length; i++) {
//  let twox = nums[i]*2
// numsx2.push(twox)
    
//   }

//   alert("Умножение: " + numsx2)
// }

// 32)

// function Click() {
//   let text = document.getElementById("texts").value.toLowerCase()
// let vowels = "аеёиоуыэюяaeiou";
// let num = 0;


//   for (let i = 0; i < text.length; i++) {
//  if (vowels.includes(text[i])) {
//   num++
//  }
    
//   }
//   alert(num)
// }

// 33)

// function year(){
//   let year = +document.getElementById("num").value;
//   if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
//     alert("Високостный год")
//   }else{
//     alert("НЕ Високостный год")
//   }
// }

// 34)

// function year() {
//   let num = +document.getElementById("num").value
//   let fact = 1;

//   if (num >= 0) {
//     for (let i = 1; i <= num; i++) {
//      fact *= i;
      
//     }
//     alert("Факториал числа: " + fact)
//   }else{
//      alert("Введите не Jтрицательное число!!!" )
//   }
   

// }

// 35)

// function Numbers() {
//   let nums = [1,6,12,2,33,55,189,24];
//  let max = nums[0];
//  let SecMAx = 0

//   for (let i = 1; i < nums.length; i++) {  
//     if (nums[i] > max ) {
//        max = nums[i]   
//     }   
// }

// // alert(max)
//   for (let i = 0; i < nums.length; i++) {  
//     if (nums[i] < max && nums[i] > SecMAx) {
//        SecMAx = nums[i]   
//     }   
// }

// alert(SecMAx)
//   }

// 36)

// function Numbers() {
//  let nums = [1,6,12,2,33,55,189,24];

//  for (let i = 0; i < nums.length; i++) {
// for (let j = i+1; j < nums.length; j++) {
//  if (nums[i] < nums[j]) {
//   let temp = nums[i]

//   nums[i] = nums[j]

// nums[j] = temp

//  }
  
// }
  
//  }
// return alert(nums)
  
// }

// 37)

// function Texts(){
//   let text = document.getElementById("texts").value.toLowerCase()
//   let gde = "gde"
//   let nums = 0;

//   for (let i = 0; i < text.length; i++) {
//     if (gde.includes(text[i])) {
//       nums++
//     }
    
//   }
// alert(nums)

// }

// 38)

// function Increment() {
//   let numbers = document.getElementById("nums")
//   let One = parseInt(numbers.value)

// One++
// numbers.value = One
// }

// 39)

// function Timer() {
//   let num = 0
//  setInterval(() => {
//     num++
//     alert(num)
//   }, 3000);

// }

// 40)

// function Timer() {
//   let num = 0;
//   setTimeout(() => {
//     num++
//     alert(num)
//   }, 2000);
  
// }

// 41)

// function ShowMassiv() {
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   let text = ''
//   for (let i = 0; i < matrix.length; i++) {
//     text += matrix[i].join(' ') + "\n"
    
//   }


//   document.getElementById("massiv").value = text;

  

// }

// 42)

// function Divider() {
//   let massiv = [2,4,5,7,13]
//   let text = ''
//   for (let i =  massiv.length-1; i >= 0; i--) {
// text += massiv[i] + ","
//   }
//   document.getElementById("texts").value = text
// }

// 43)

// function ChangeImg() {
//   document.getElementById("img").style.transform = "scaleX(-1)"
// }

// 44)

// function Reverse() {
// }

// 45)

// function Count() {
//   let arr = [[5, -6, 1, 7, 9], [-12, 4, 6, 7]];
// let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//        if (arr[i][j] < 6) {
//       count++
//     }      
//     }  
//   }
//   alert(count)
// }

// 46)

// function Start() {
//   let seconds = 0;

//   setInterval(() => {
//     seconds++

//     document.getElementById("num").value = seconds
//   }, 50);
// }

// 47)

// function TextArea() {
//     const matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]   
//   ];
//   let matrix2 = []

//   for (let i = 0; i < matrix1.length; i++) {
//     matrix2[i] = []
//    for (let j = 0; j < matrix1[i].length; j++) {
//     matrix2[i][j] = matrix1[2-j][i] 
//    } 
    
//   }
//   let output = ""
// for (let i = 0; i < matrix2.length; i++) {
//    for (let j = 0; j < matrix2[i].length; j++) {
//    output += matrix2[i][j] + ","
//    } 
//     output += "\n"
//   }

//   document.getElementById("text").value = output
// }

// 48)

// хз

// 49)

// function Goahead() { 
//     let div = document.getElementById("cursor")

//     let pos = 0;

//     setInterval(() => {
//         pos += 2
//         div.style.left = pos + "px"
//     }, 100);
// }

// 50)

// function MinIndex() {
//     let arr = [5, -6, 7, -17, 56, 45];
//     let min = 1000;

//     for (let i = 0; i < arr.length; i++) {
//       if (min > arr[i]) {
//         min = i
//       }
        
//     }
//     document.getElementById("num").value = min
// }

// 51)

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let x = 0;
// function GO() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.moveTo(x, 20);
//   ctx.lineTo(x + 50, 20);
//   ctx.stroke();
//   x += 2;
//   if (x > canvas.width) x = 0;
//   requestAnimationFrame(GO);
// }
// GO();
// }

// 52)

// function GO() {
//    const canvas = document.getElementById('imageCanvas');
// const ctx = canvas.getContext('2d');

// const imgData = ctx.createImageData(1, 1);
// imgData.data[0] = 100; 
// imgData.data[1] = 0;   
// imgData.data[2] = 0;   
// imgData.data[3] = 255; 

// ctx.putImageData(imgData, 30, 40); 
// }

// 53)

// function Go() {
//     const arr = [[5, -6, 7], [0, 2, -4], [0, 4, 8]];
// const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2[i] = [];
//         for (let j = 0; j < arr[i].length; j++) {
//          arr2[i][j] = arr[j][2-i]           
//         }        
//     }
//     let all = ""
//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr2[i].length; j++) {
//            all += arr2[i][j] + ","           
//         }       
//         all += "\n"
//     }
//     document.getElementById("textarea").value = all
// }

// 54)

// function Go() {
//      const arr = [[5, -6, 7], [0, 2, -4], [0, 4, 8]];

//      for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > 0) {
//                 arr[i][j] += 12;
//             }      
//         }      
//      }
//      document.getElementById("textarea").value = arr  
// }

// 55)

// function Go() {
//    const arr = [5, -6, 7, -17, 56, 45];

//    let arr2 = ""
//    for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > 0) {
//     arr2 += arr[i] + ","
//    }
    
//    }
//    document.getElementById("outputBlock").textContent = arr2
// }

// 56)

// function Go() {
//     let message = "мое первое приложение"
// let mes = ""
// let i = 0
//     setInterval(() => {
//       if (i < message.length) {
//         mes += message[i]
//         i++
//          document.getElementById("newtext").textContent = mes
//       }else{
      
//       }
//     }, 50);

   
// }

// 57)

// const canvas = document.getElementById('imageCanvas');
// const ctx = canvas.getContext('2d');

// canvas.addEventListener('mousemove', (e) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   ctx.fillStyle = 'black';
//   ctx.beginPath();
//   ctx.arc(x, y, 2, 0, Math.PI * 2);
//   ctx.fill();
// });

// 58)

// function Go() {
//     const arr = [[5, -6, 7], [0, 2, -4], [0, 4, 8]];
//     let max = -1000;
//     let arr2 = ""
//     let arr3 = ""

//     for (let i = 0; i < arr.length; i++) {
//    if (max < arr[i][1]) {
//     arr2 = arr[i][1]
//    }
//    if (max < arr[i][2]) {
//     arr3 = arr[i][2]
//    }     
//     }
//     document.getElementById("input1").value = arr2
//     document.getElementById("input2").value = arr3
// }

// 59)

// function Go() {
//     const arr = [5, -6, 7, -17, 56, 45];
//     const arr2 = ""

//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > 0) {
//         arr[i] = 0
//        }
        
//     }
//     document.getElementById("resultRich").textContent = arr
// }

// 60)

// function Go() {
//     const s = "группа 843р";
//     let ar = 0;

//     for (let i = 0; i < s.length; i++) {
//        if (s[i] >0 && s[i] < 10) {
//         ar++
//        }
        
//     }
//     document.getElementById("statusBar").textContent = ar
// }

// 61)

// function Go() {
//     const arr = [[5, -6, 7], [0, 2, -4], [0, 4, 8]];
//     let nec = 1;

//     for (let i = 0; i < arr.length; i++) {
//         nec *= arr[i][i]
        
//     }
//     document.getElementById("statusBar").textContent = nec
    
// }

// 62)

// function Go() {
//     const s = "группа 842р";
//     let a = 0;
//     const len = s.length


//     for (let i = 0; i < len; i++) {
//         if (!(s[i] > 0 && s[i] < 10) && s[i] !== ' ') {
//             a++
//         }
        
//     }
//     document.getElementById("letterCount").value = a
// }

// 63)

// document.getElementById("copyButton").addEventListener("click",()=>{
//  const value = document.getElementById("inputText").value
// let text = document.getElementById("memoText")

// text.value = value
// })

// 64)

// function Go() {
//     const s = "группа 842р";
//     let a = ""
//     let b = ""

//     for (let i = 0; i < s.length; i++) {
//         if (!(s[i] > 0 && s[i] < 10) && s[i] !== ' ') {
//             a += s[i]
//         }else{
//              b += s[i]
//         }     
//     }
//     document.getElementById("inputOriginal").value = a + "-" + b
// }

// 65)

// function Go(){
//      const arr = [5, -6, 7, -17, 56, 45];
//      let min = 1000

//      for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > 0) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//        }
        
//      }
//      document.getElementById("memoOutput").value = min
// }

// 66)

// function Go() {
//      const arr = [5, -6, 7, -17, 56, 45];
//      let sum = 0;

//      for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 50) {
//             sum += arr[i]
//         }
        
//      }
//      document.getElementById("statusBar").textContent = sum
// }

// 67)

// function Go() {
//     const arr = [[5, -6, 7, 10], [0, 2, -4, 5]];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < 3; j++) {
//         sum += arr[i][j]
        
//        }
//     }

//     document.getElementById("sumInput").value = sum
// }

// 68)

// function Go() {
//     const text = "google"
//     let text2 = ""

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] !== "g") {
//             text2 += text[i]
//         }
        
//     }
//     document.getElementById("Result").value = text2
// }

// 69)

// function Go() {
//     const arr = [5, -6, 7, -17, 56, 45];
//     let newAll = "";

//     for (let i = 0; i < arr.length; i++) {
//        newAll += arr[i] * 20 + " "   
//     }
//     document.getElementById("memoOutput").textContent = newAll
// }

// 70)

// function Go() {
//     const str = "gooogle.com"
//     let index = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ".") {
//             index = i
//         }    
//     }
//     document.getElementById("Result").value = index
// }

// 71)

// function Go() {
//    const canvas = document.getElementById("circleCanvas");
// const ctx = canvas.getContext("2d");
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.beginPath();
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
// ctx.fillStyle = "blue";
// ctx.fill();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.stroke(); 
// }

// 72)

// function Go() {
//     const label = document.getElementById("labelSource").innerText
    
// document.getElementById("inputTarget").value = label
    
// }

// 73)

// function Go() {
//     const canvas = document.getElementById("lineCanvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(10, 20);
// ctx.lineTo(30, 30);
// ctx.lineTo(0, 0);

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.stroke();

// }

// 74)

// function Go() {
//     const canvas = document.getElementById("imageCanvas");
// const ctx = canvas.getContext("2d");

// ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// 75)

// function Go() {
//   let num = +document.getElementById("numberField").value 
//   num += 10
//   document.getElementById("numberField").value = num
// }

// 76)

// function Go() {
//     const text = "amazon.com"
//     let text2 = ""

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] !== ".") {
//             text2 += text[i]
//         }
        
//     }
//     document.getElementById("textInput").value = text2
// }

// 77)

// document.getElementById("input1").addEventListener("input",()=>{
//     document.getElementById("input2").value = document.getElementById("input1").value
// })

// или

// function Go() {
//     let input = document.getElementById("input1").value

//     document.getElementById("input2").value = input
    
// }

// 78)

// document.getElementById("setTitleButton").addEventListener("click",()=>{
// let text = document.getElementById("inputTitle").value
// document.title = text
// })

// 79)

// document.getElementById("ShowCord").addEventListener("click", () =>{
//     const CordX = window.innerWidth / 2
//     const CordY = window.innerHeight / 2

//     document.getElementById("coordX").value = CordX
//     document.getElementById("coordY").value = CordY
// })

// 80)

// document.getElementById("Result").addEventListener("click",()=>{
//     const num1 = +document.getElementById("num1").value
//     const num2 = +document.getElementById("num2").value
//     let sum;

//     sum = num1 + num2

//     document.getElementById("sumResult").value = sum


// })

// 81)

// document.getElementById("MouseMove").addEventListener("click",(move)=>{
// document.getElementById("mouseX").value = move.clientX
// document.getElementById("mouseY").value = move.clientY
// })

// или

// document.addEventListener("mousemove",(move)=>{
// document.getElementById("mouseX").value = move.clientX
// document.getElementById("mouseY").value = move.clientY
// })





