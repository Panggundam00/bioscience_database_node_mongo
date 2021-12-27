var express = require("express");
const mongoose = require('mongoose');
const AgriculturalApplications = require('./model/agriculturalApplications');
const District = require('./model/district');
const IndustrialApplications = require('./model/industrialApplications');
const Microorganism = require('./model/microorganism');
const MicroorganismSubType = require('./model/microorganismSubTypes');
const MicroorganismTypes = require('./model/microorganismTypes');
const Organization = require('./model/organization');
const Province = require('./model/province');
const Researcher = require('./model/researcher');
const SubDistrict = require('./model/subDistrict');
const { TextEncoder, TextDecoder } = require("util");

// mongoose.connect('mongodb://mongo:27018/bio', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

var app = express();

app.use(express.json({ limit: '50mb'}));

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("[success] task 1 : listening on port " + port);
});

mongoose
  .connect(
    'mongodb://mongo:27017/bio',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const mockOrganizations = [
    {
        id: "1",
        name: "Kasetsart University",
    },
    {
        id: "2",
        name: "Srinakharinwirot University",
    }
]

app.get("/", (req, res) => {
    console.log("api: /");
    res.status(200).send("bio database mongodb api");
});


//-------------- AgriculturalApplications --------------

app.get("/api/agriculturalApplications", async (req, res) => {
    const data = await AgriculturalApplications.find({})
    res.status(200).send(data);
});

app.get('/api/agriculturalApplications/:id', async (req, res) => {
    const { id } = req.params
    const data = await AgriculturalApplications.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/agriculturalApplications', async (req, res) => {
    const payload = req.body
    const data = new AgriculturalApplications(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/agriculturalApplications/:id', async (req, res) => {
    const { id } = req.params
    await AgriculturalApplications.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- District --------------

app.get("/api/districts", async (req, res) => {
    const data = await District.find({})
    res.status(200).send(data);
});

app.get('/api/districts/:id', async (req, res) => {
    const { id } = req.params
    const data = await District.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/districts', async (req, res) => {
    const payload = req.body
    const data = new District(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/districts/:id', async (req, res) => {
    const { id } = req.params
    await District.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- IndustrialApplications --------------

app.get("/api/industrialApplications", async (req, res) => {
    const data = await IndustrialApplications.find({})
    res.status(200).send(data);
});

app.get('/api/industrialApplications/:id', async (req, res) => {
    const { id } = req.params
    const data = await IndustrialApplications.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/industrialApplications', async (req, res) => {
    const payload = req.body
    const data = new IndustrialApplications(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/industrialApplications/:id', async (req, res) => {
    const { id } = req.params
    await IndustrialApplications.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- Microorganism --------------

app.get("/api/microorganisms", async (req, res) => {
    const data = await Microorganism.find({})
    res.status(200).send(data);
});

app.get('/api/microorganisms/:id', async (req, res) => {
    const { id } = req.params
    const data = await Microorganism.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/microorganisms', async (req, res) => {
    const payload = req.body
    const data = new Microorganism(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/microorganisms/:id', async (req, res) => {
    const { id } = req.params
    await Microorganism.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- MicroorganismSubTypes --------------

app.get("/api/microorganismSubtypes", async (req, res) => {
    const data = await MicroorganismSubType.find({})
    res.status(200).send(data);
});

app.get('/api/microorganismSubtypes/:id', async (req, res) => {
    const { id } = req.params
    const data = await MicroorganismSubType.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/microorganismSubtypes', async (req, res) => {
    const payload = req.body
    const data = new MicroorganismSubType(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/microorganismSubtypes/:id', async (req, res) => {
    const { id } = req.params
    await MicroorganismSubType.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- MicroorganismTypes --------------

app.get("/api/microorganismTypes", async (req, res) => {
    const data = await MicroorganismTypes.find({})
    res.status(200).send(data);
});

app.get('/api/microorganismTypes/:id', async (req, res) => {
    const { id } = req.params
    const data = await MicroorganismTypes.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/microorganismTypes', async (req, res) => {
    const payload = req.body
    const data = new MicroorganismTypes(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/microorganismTypes/:id', async (req, res) => {
    const { id } = req.params
    await MicroorganismTypes.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- Organization --------------

app.get("/api/organizations", async (req, res) => {
    const data = await Organization.find({})
    res.status(200).send(data);
});

app.get('/api/organizations/:id', async (req, res) => {
    const { id } = req.params
    const data = await Organization.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/organizations', async (req, res) => {
    const payload = req.body
    const data = new Organization(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/organizations/:id', async (req, res) => {
    const { id } = req.params
    await Organization.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- Province --------------

app.get("/api/provinces", async (req, res) => {
    const data = await Province.find({})
    res.status(200).send(data);
});

app.get('/api/provinces/:id', async (req, res) => {
    const { id } = req.params
    const data = await Province.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/provinces', async (req, res) => {
    const payload = req.body
    const data = new Province(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/provinces/:id', async (req, res) => {
    const { id } = req.params
    await Province.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- Researcher --------------

app.get("/api/researchers", async (req, res) => {
    const data = await Researcher.find({})
    res.status(200).send(data);
});

app.get('/api/researchers/:id', async (req, res) => {
    const { id } = req.params
    const data = await Researcher.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/researchers', async (req, res) => {
    const payload = req.body
    const data = new Researcher(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/researchers/:id', async (req, res) => {
    const { id } = req.params
    await Researcher.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- SubDistrict --------------

app.get("/api/subDistricts", async (req, res) => {
    const data = await SubDistrict.find({})
    res.status(200).send(data);
});

app.get('/api/subDistricts/:id', async (req, res) => {
    const { id } = req.params
    const data = await SubDistrict.findOne({id:id})
    res.status(200).send(data);
});

app.post('/api/subDistricts', async (req, res) => {
    const payload = req.body
    const data = new SubDistrict(payload)
    await data.save()
    res.status(201).send(req.body)
});

app.delete('/api/subDistricts/:id', async (req, res) => {
    const { id } = req.params
    await SubDistrict.findOneAndDelete({ id:id })
    res.status(204).send("deleted")
});


//-------------- loadtest ---------------

// app.get('/load-test/microorganisms/:count', async (req, res) => {
//     const { count } = req.params
//     console.log(count)
//     const data = await Microorganism.find({}).limit(count)
//     res.status(200).send(data);
// });

app.get('/load-test/microorganisms/1', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(1)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/10', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(10)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/100', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(100)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/200', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(200)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/300', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(300)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/400', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(400)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/500', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(500)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/1000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(1000)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/5000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(5000)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/10000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(10000)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/20000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(20000)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/100000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(100000)
    res.status(200).send(data);
});

app.get('/load-test/microorganisms/1000000', async (req, res) => {
    const { count } = req.params
    console.log(count)
    const data = await Microorganism.find({}).limit(1000000)
    res.status(200).send(data);
});

app.post('/load-test/microorganisms-add-test', async (req, res) => {
    const payload = req.body
    // const data = new Microorganism(payload)
    // await data.save()
    await payload.forEach(element => {
        console.log(element)
        console.log("-----")
    });
    res.status(201).send(req.body)
});

app.post('/load-test/microorganisms', async (req, res) => {
    const payload = req.body
    await payload.forEach(element => {
        const data = new Microorganism(element)
        data.save()
    });
    res.status(201).send(req.body)
});


//-------------- Not Found --------------

app.use((req, res, next) => {
    var err = new Error("404 not found");
    err.status = 404;
    next(err);
});