const img1 = document.getElementsByClassName("img1")

gsap.to(img1, {keyframes: [
    {duration: 0.6, x:100},
    {duration: 0.6, y:100},
    {duration: 0.6, x:200}
]})