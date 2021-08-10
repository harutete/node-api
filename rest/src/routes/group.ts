import express from 'express'
import { GROUP_LIST } from '../../../data/group'

const router = express.Router();

router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(GROUP_LIST);
});

export default router