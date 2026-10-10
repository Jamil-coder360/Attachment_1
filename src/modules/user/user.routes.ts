import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).json([
    {
      name: "nahid",
      age: 21,
    },
  ]);
});

const userRouter = router;

export default userRouter;
