import { Router } from 'express'


const router = Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'lista productos ' })
});


export default router