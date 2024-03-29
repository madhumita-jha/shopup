const express = require('express');
const mysql = require("mysql2")
const cors = require('cors');

require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const stripe = require('stripe')('sk_test_51OzbDhSB19eKwdsGvOOpNbSGBaF3WOFjadexs4dsABI16NhGlxwSvyknyh37Vl74XkLBJuvDGy13XCJiHbWTux1O00ZQWyORDJ');

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "id",
    secret: "secretkeyforsession724",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24
    }
}));


const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.post('/register', (req,res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.log(err);
        }
        db.query(
            "INSERT INTO users (fullname,email,password) VALUES (?,?,?)",
            [fullname,email,hash],
            (err,result) => {
                console.log(err);
            }
        );
    });
});


app.get("/login", (req,res) => {
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false}); 
    }
})
app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ?;",
        [email],
        (err,result) => {
            if(err) {
                res.send({ err:err});
            }
            if(result.length > 0){
                bcrypt.compare(password, result[0].password, (error, response) =>{
                    if(response){
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result)
                    }
                    else{
                        res.send({message: "Incorrect Username/Password!"})
                    }
                })
            } else {
                res.send({message: "User doesnt exist"});
            }
        }
    );
});

app.get("/profile", (req,res) => {
    console.log(req.session);
    if(req.session.user){
        const userId = req.session.user[0].id;
        db.query(
            "SELECT fullname, email FROM users WHERE id = ?",
            [userId],
            (err,result) => {
                if(err) {
                    res.status(500).send({ err: err });
                } else {
                    res.status(200).send(result[0]);
                }
            }
        );
    } else {
        res.status(401).send({message: "Unauthorized"}); 
    };
});

const YOUR_DOMAIN = 'http://localhost:3001'; 

app.post('/create-checkout-session', async (req, res) => {
    try {
        const totalAmt = parseFloat(req.body.totalAmt);
    
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
            price_data: {
              currency: 'inr', 
              product_data: {
                name: 'Total Amount'
              },
              unit_amount: 30000, 
            },
            quantity: 1,
          }],
          mode: 'payment',
          success_url: `${YOUR_DOMAIN}?success=true`,
          cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });
    
        res.json({ url: session.url });
      } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Error creating checkout session' });
      }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
