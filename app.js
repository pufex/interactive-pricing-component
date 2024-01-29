const slider = document.querySelector('#slider');
const price = document.querySelector('#price');
const pageViews = document.querySelector('#pageviews')
const cycle = document.querySelector('#cycle')
const toggle = document.querySelector('.toggle')
const toggleCircle = document.querySelector('.toggle-circle')


let toggleIndex = 0;

pricing = [
  {
    pageViews: "10K",
    price: "8.00",
  },
  {
    pageViews: "50K",
    price: "12.00",
  },
  {
    pageViews: "100K",
    price: "16.00",
  },
  {
    pageViews: "500K",
    price: "24.00",
  },
  {
    pageViews: "1M",
    price: "36.00",
  },
]

price.innerHTML = `$${pricing[2].price}`
pageViews.innerHTML = `${pricing[2].pageViews} PAGEVIEWS`

slider.addEventListener('change', () => {
  price.innerHTML = `$${(Number(pricing[slider.value].price)*((1 - (0.25*(toggleIndex)))*(1 + 11*toggleIndex))).toFixed(2)}`
  pageViews.innerHTML = `${pricing[slider.value].pageViews} PAGEVIEWS`
})

toggle.addEventListener('click', () => {
  toggleIndex = (toggleIndex+1)%2;
  if (toggleIndex == 0){
    cycle.innerHTML = '/ month'
  } 
  else if(toggleIndex == 1){
    cycle.innerHTML = '/ year'
  }
  toggleCircle.classList.toggle("toggle-circle-active");
  toggle.classList.toggle("toggle-active");
  price.innerHTML = `$${(Number(pricing[slider.value].price)*((1 - (0.25*(toggleIndex)))*(1 + 11*toggleIndex))).toFixed(2)}`
})



