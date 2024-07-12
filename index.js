const form = document.getElementById("form")

const retry = document.querySelector(".retry")

const btn = document.getElementById("btn")

const btn2 = document.querySelector(".btn2")

const thanks = document.querySelector(".thanks")

const container = document.querySelector(".container")

const email = document.getElementById("email")

const mail = document.querySelector(".mail")

form.addEventListener('submit', (e) => {
  e.preventDefault(e)

  const formData = new FormData(e.target)

  const data = Object.fromEntries(formData)

  const string = data.email

  const ss = string.search("@")

  const result = string.slice(ss,string.length)

  const myArr = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@aol.com", "@protonmail.com", "@mail.com", "@zoho.com", "@icloud.com", "@yahoo.co.uk"]

  

  if (myArr.includes(result) && string.length > result.length) {
      retry.innerText = ''
      container.classList.add("hide")
      thanks.classList.add("unhide")
       mail.innerText = `${string}`
      email.classList.remove("color")
  } else if (string.length === 0) {
    retry.innerText = "!field required"
    email.classList.add("color")
  } else {
    retry.innerText = "!valid mail required"
    email.classList.add("color")
  }


  btn2.addEventListener("click", () => {
    thanks.classList.remove("unhide")
    container.classList.remove("hide")
  })

    console.log(result)
})