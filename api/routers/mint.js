const express = require('express')
const router = express.Router()
import axios from 'axios'
import * as FiatFrenzy from '../abi/FiatFrenzy.json'
import * as chRes from './chRes.json'
async function mint(web3, addr, thread, post) {
  try {
    const contract = new web3.eth.Contract(FiatFrenzy.abi, process.env.CONTRACT_ADDRESS)
    let accounts = await web3.eth.getAccounts()
    return await contract.methods.proofOfMeme(addr, post).send({from:accounts[0], gas: 5000000});
  } catch (e) {
    console.log(e)
    return e
  }
}

module.exports = (web3) => {
  router.post('/', async (req, res) => {
    try {
      const chRes = await axios.get(`https://a.4cdn.org/pol/thread/${req.body.thread}.json`)
    } catch (e) {
      res.json({message: 'error'})
      return
    }

    let post = chRes.data.posts.find((post) => {
      return post.no == req.body.post
    })
    if (post) {
      let addr = post.com.match(/0x[a-zA-Z0-9]+/)
      console.log(addr[0])
      if (addr[0]) {
        try {
          const mintRes = await mint(web3, addr[0], req.body.thread, req.body.post)
          res.json({message: 'success',
            data: mintRes})
        } catch (e) {
          throw e
        }
      }
      
    } else {
      res.json({
        message: 'no post by this number'
      })
      return
    }
  })

  return router
}
