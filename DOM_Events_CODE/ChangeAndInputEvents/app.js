const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});



<body>
    <h1>Enter Your Username</h1>
    <input type="text" id="username">
</body>

</html>

input.addEventListener('input', (e) => {
    if(!this.value){
        h1.textContent = `Enter Your Username`
    } else{
        h1.textContent = `Welcome, ${input.value}`;
    }
})