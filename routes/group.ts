import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  const param = [
    {
      'group_name': 'spring'
    },
    {
      'group_name': 'summer'
    },
    {
      'group_name': 'autumn'
    },
    {
      'group_name': 'winter'
    }
  ];
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

export default router