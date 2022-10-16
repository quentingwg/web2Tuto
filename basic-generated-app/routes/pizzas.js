var router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/',(req, res, next) => {
  return res.json(menu);
});
