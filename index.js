const container = document.querySelector('.container')
const container2 = document.querySelector('.container.two')

const moveForward = () => {
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.05 } })
  // tl.to(container, {
  //   clipPath: 'clip-path: polygon(90% 10%, 10% 9%, 10% 90%, 90% 90%)',
  // })
  tl.to(container, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
  tl.to(
    container,
    {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    },
    '+=1'
  )
  tl.to('h1', { color: '#000' })
  tl.to(
    container2,
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    '-=0.3'
  )
  tl.play()
}

const moveBackward = () => {
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.05 } })
  // tl.to(container2, {
  //   clipPath: 'clip-path: polygon(90% 10%, 10% 9%, 10% 90%, 90% 90%)',
  // })
  tl.to(container2, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
  tl.to(
    container2,
    {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    },
    '+=1'
  )
  tl.to('h1', { color: '#fff' })
  tl.to(
    container,
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    '-=0.3'
  )
  tl.play()
}

container.addEventListener('click', () => {
  moveForward()
})

container2.addEventListener('click', () => {
  moveBackward()
})
