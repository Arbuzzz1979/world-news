export const pageAnimation = {
  hidden: {
    opacity: 0,
    y:300,
  },
  show: {
    opacity:1,
    y:0,
    transition: {
      duration:1,
    }
  },
  exit: {
    opacity: 0,
    y:300,
    transition: {
      duration:1,
    }    
  }
}

export const topNewsAnimation = {
  hidden: {
    opacity: 0,
    x:300,
  },
  show: {
    opacity:1,
    x:0,
    transition: {
      duration:1,
    }
  },
  exit: {
    opacity: 0,
    x:300,
    transition: {
      duration:1,
    }    
  }
}