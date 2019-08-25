const randomPhoneNumbers = (done)=>{
    let numbers = []
    for (let i = 0; i < 10000; i++) {
      let low = 63724345
      let high =98243426
      numbers.push(Math.floor(Math.random() * (high - low + 1)) + low)
    }
    return done(numbers)
}


module.exports = {
  randomPhoneNumbers,
}