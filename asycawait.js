async function waitFor5Seconds() {

  setTimeout(() => {
    console.log('Five seconds have  passed.')
  }, 5000);
  let fiveSecsPromise = await waitFor5Seconds;
  return fiveSecsPromise
}
waitFor5Seconds()
  .then(
    function (results) {
      console.info(results)
      console.log('This will be printed after five seconds.')
    }
  )
  .catch(
    function errorHandler(error) {
      console.error(error)
    }
  )
