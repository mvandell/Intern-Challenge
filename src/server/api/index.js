const express = require('express');
const apiRouter = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//TODO: add mock responses
//search for key phrases

//GET ALL
//GET api/data
apiRouter.get("/data", async (req, res, next) => {
    try {
        const allData = await prisma.drone.findMany();
        res.send(allData);
    } catch (error) {
        next(error)
    }
});
//GET SINGLE?