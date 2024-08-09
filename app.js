const express = require("express");
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
const fs = require('node:fs');
const session = require('express-session');

app.use(session({
  secret: 'your_secret_key', // Replace with a strong, unique secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

// Route for the pages
app.get('/', (req, res) => {
  res.render('Home', { title: 'Home Page' });
});

app.get('/Browse_Available_Pets', (req, res) => {
  res.render('Browse_Available_Pets', { title: 'Browse_Available_Pets Page' });
});


app.get('/Find_dogcat', (req, res) => {
  res.render('Find_dogcat', { title: 'Find_dogcat Page' });
});



app.get('/Dog_Care', (req, res) => {
  res.render('Dog_Care', { title: 'Dog_Care Page' });
});

app.get('/Cat_Care', (req, res) => {
  res.render('Cat_Care', { title: 'Cat_Care Page' });
});
app.get('/Have_pet_give_away', (req, res) => {
  if(req.session.user){
    res.render('Have_pet_give_away', { title: 'Have_pet_give_away Page' }); //If a sessions id exist 
  }
  else{
    res.render('Have_pet_give_away_login', { title: 'Have_pet_give_away Page' });
  }
});

app.get('/logout', (req, res) => {
  if(req.session.user)
    {
    req.session.destroy(err => 
      {
      if (err)
         {
        console.error('Error destroying session:', err);
        return res.status(500).send('Server error');
         }
        res.send('Logged out successfully.');
      })
    }
  });



app.get('/Contactus', (req, res) => {
  res.render('Contactus', { title: 'Contactus Page' });
});
app.get('/Privacy', (req, res) => {
  res.render('Privacy', { title: 'Privacy Page' });
});
app.get('/createAccount', (req, res) => {
  res.render('CreateAnAccount', { title: 'createAnAccount Page' });
});

//Previous and next button

app.get('/previous', (req, res) => {
  res.render('Browse_Available_Pets', { title: 'Browse_Available_Pets Page' });
});
app.get('/next', (req, res) => {
  res.render('Browse_Available_Pets_2', { title: 'Browse_Available_Pets_2 Page' });
});

//Backend for the create account 

app.post('/createAccount', (req, res) => {
  //Should now check if already in the list only the login, if not save it. 
  const loginEntry = req.body.login;
  console.log(loginEntry);
  const passwordEntry = req.body.password;


//Read the file and create a const array for login
  fs.readFile('public/login.txt', 'utf8', (err, data) => {

    const lines = data.split("\n");
    const loginfile = lines.map((element)=>{return element.split(":")[0];}); //to get the login only 
  
    if (err) {
      console.error(err);
      return;
    }
    else 
    {
      let x = 0;
      for(let i =0;i<loginfile.length;i++)
        {
          if(loginfile[i]==loginEntry){
            console.log("The login already exist");
            x++;
            res.send("This account already exist, please use another login");
            break;
          }
        }
        if(x==0)
          {
            // res.send("Welcome");
            const newEntry = `\n${loginEntry}:${passwordEntry}`;
            console.log(newEntry);
            fs.appendFile('public/login.txt', newEntry,err => 
              {
              if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Server error');
              }
              else{
                res.send("Account created with success")
              }
              })
         }
    };
  });
});

//For the login 

app.post('/loginAccount', (req, res) => {
 
  const loginEntry2 = req.body.login;
  console.log(loginEntry2);
  const passwordEntry3 = req.body.password;
  const combination = loginEntry2 + ":" + passwordEntry3;
  console.log(passwordEntry3);

  //check line by line if the login and password exit 
  fs.readFile('public/login.txt', 'utf8', (err, data) => {

    const lines2 = data.split("\n");
    
    
    if (lines2.includes(combination)){
      req.session.user = combination;
      console.log("Matching");
      res.render('Have_pet_give_away', { title: 'Have_pet_give_away Page' });
    }
    else{
      console.log("Not matching ")
      res.send("Credentials not matching, please provide valids one")
    }
  });



});
  



app.listen(3000, ()=>console.log("Connected to port 300"));

