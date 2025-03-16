const n=10

const array=[]

for(let i=0;i<n;i++)
{
    array[i]=Math.random()
}
console.log(array)



for(let i=0;i<n;i++)
{
    const bars=document.createElement('div')

    bars.style.height=array[i]*100+'%'
    bars.style.backgroundColor="black"
    bars.style.width="10px"

    container.appendChild(bars)
    bars.classList.add("bars")
}