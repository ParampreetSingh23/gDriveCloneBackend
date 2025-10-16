import express from 'express'
const app = express();
const router = express.Router();
router.get('/test',(req,res)=>{
 res.send('user route');
})
router.get('/register',(req,res)=>{
 res.render('register')
})
router.post('/register',(req,res)=>{
 const data = req.body
 console.log(data);
 res.send('done')
 
})

export default router;