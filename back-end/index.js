const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Clearance = require('./models/Clearance');
const LfPosts = require('./models/LfPosts');
const TsPosts = require('./models/TsPosts');
const TePosts = require('./models/TePosts');
const Notices = require('./models/Notices');
const Rejection = require('./models/Rejection');
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');
//const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();


app.use(express.json()); //converting all data into json which recieves from frontend
app.use(cors());
app.use(CookieParser());
const dbString = 'mongodb+srv://shoaib:Desperados1@cluster019.s7jlw.mongodb.net/Student-Assistant?retryWrites=true&w=majority';
let whichUsr = "";
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("db is connected");
        app.listen(3001);

    })
    .catch((err) => console.log(err));
// Maham backend Code start//
                                                                // Student Lost and Found
app.post('/insertLfPosts', (req, res) => {
    const dt = new Date();
    const LfPost = new LfPosts({
        title: req.body.title,
        content: req.body.body,
        date: dt
    }
    );
    LfPost.save()
    .then((result) => {
        res.send("Lost and Found Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})

// Student Trading and Sharing
app.post('/insertTsPosts', (req, res) => {
    const dt = new Date();
    const TsPost = new TsPosts({
        title: req.body.title,
        content: req.body.body,
        date: dt
    }
    );
    TsPost.save()
    .then((result) => {
        res.send("Trading and Sharing Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})

// Student Trading and Sharing
app.post('/insertTePosts', (req, res) => {
    const dt = new Date();
    const TePost = new TePosts({
        title: req.body.title,
        content: req.body.body,
        date: dt
    }
    );
    TePost.save()
    .then((result) => {
        res.send("Trips and Events Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})
                                                                    //Admin Lost and found
        //getting all posts
 app.get('/getLfPosts', (req,res) =>{

  LfPosts.find({status:"false"}, (err,result) => {
  if(err)
    console.log(err);
                
      res.send(result);
     }).sort({"date":-1})
    })
  
    // getting specific post from db
  app.get('/getLfPost/:id', (req,res) =>{
      LfPosts.findById(req.params.id, (err,result) =>{
          if(err)
          console.log(err);
          else
          res.send(result);
      })
  })
    //getting approved posts
app.get('/getSLfPosts', (req,res) =>{
 LfPosts.find({status:"true"}, (err,result) => {
    if(err)
    console.log(err);
                      
    res.send(result);
   }).sort({"date":-1})
 })
  //updating status
  app.put("/updateLfposts", async (req, res) => {
    try {
        LfPosts.findById(req.body.id, (err,updatedStatus) => {
            updatedStatus.status = true;
            updatedStatus.save();
            res.send("updateStatus");

        });
    } catch (err) {
        console.log(err);
    }
});
app.delete("/deleteLfposts/:id",async(req,res)=>{
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        LfPosts.findByIdAndRemove(req.params.id).exec();
        res.send("Post deleted");
    } catch (err) {
        console.log(err);
    }
});
                                                        //Admin Trips and events                        
 app.get('/getTePosts', (req,res) =>{

    TePosts.find({status:"false"}, (err,result) => {
    if(err)
      console.log(err);
                  
        res.send(result);
       }).sort({"date":-1})
    })
      //getting approved posts
  app.get('/getSTePosts', (req,res) =>{
   TePosts.find({status:"true"}, (err,result) => {
      if(err)
      console.log(err);
                        
      res.send(result);
     }).sort({"date":-1})
   })
   // getting specific post from db
   app.get('/getTePost/:id', (req,res) =>{
    TePosts.findById(req.params.id, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
        })
    })
    //updating status
    app.put("/updateTeposts", async (req, res) => {
      try {
          TePosts.findById(req.body.id, (err,updatedStatus) => {
              updatedStatus.status = true;
              updatedStatus.save();
              res.send("updateStatus");
  
          });
      } catch (err) {
          console.log(err);
      }
  });
  app.delete("/deleteTeposts/:id",async(req,res)=>{
      try {
          mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
          TePosts.findByIdAndRemove(req.params.id).exec();
          res.send("Post deleted");
      } catch (err) {
          console.log(err);
      }
  });

                                                                    //admin Trading and sharing

 app.get('/getTsPosts', (req,res) =>{

    TsPosts.find({status:"false"}, (err,result) => {
    if(err)
      console.log(err);
                  
        res.send(result);
       }).sort({"date":-1})
    })
      //getting approved posts
  app.get('/getSTsPosts', (req,res) =>{
   TsPosts.find({status:"true"}, (err,result) => {
      if(err)
      console.log(err);
                        
      res.send(result);
     }).sort({"date":-1})
   })
    // getting specific post from db
    app.get('/getTsPost/:id', (req,res) =>{
        TsPosts.findById(req.params.id, (err,result) =>{
            if(err)
            console.log(err);
            else
            res.send(result);
        })
    })
    //updating status
    app.put("/updateTsposts", async (req, res) => {
      try {
          TsPosts.findById(req.body.id, (err,updatedStatus) => {
              updatedStatus.status = true;
              updatedStatus.save();
              res.send("updateStatus");
  
          });
      } catch (err) {
          console.log(err);
      }
  });
  app.delete("/deleteTsposts/:id",async(req,res)=>{
      try {
          mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
          TsPosts.findByIdAndRemove(req.params.id).exec();
          res.send("Post deleted");
      } catch (err) {
          console.log(err);
      }
  });
       
// Maham backend Code end//

// Shoaib backend Code start//
    // inserting notice in db
app.post('/insertNotice', (req, res) => {
    const dt = new Date();
    const notice = new Notices({
        title: req.body.title,
        content: req.body.body,
        date: dt
    }
    );
    notice.save()
    .then((result) => {
        res.send("Notice Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})
  // getting all notices
app.get('/getNotices', (req,res) =>{

    Notices.find({}, (err,result) => {
        if(err)
        console.log(err);
        
        res.send(result);
    })
})
   // getting unique notice from db
app.get('/getNotice/:id', (req,res) =>{
    Notices.findById(req.params.id, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
    })
})
   // delete Notice
   app.delete('/deleteNotice/:id', (req, res) => {
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        Notices.findByIdAndRemove(req.params.id).exec();
        res.send("Notice deleted");
    } catch (err) {
        console.log(err);
    }
});

  // updating Notics
  app.put('/updateNotice', (req, res) => {
    try {
        Notices.findById(req.body.id, (err,updatedNotice) => {
            updatedNotice.title = req.body.title;
            updatedNotice.content = req.body.body;
            updatedNotice.save();
        });
    } catch (err) {
        console.log(err);
    }
});

// Shoaib backend Code end//

// Sehar backend Code start//



const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };


    //user already logged in error
    if(err == "Someone Already Logged in")
    {
        errors.password = 'Someone Already Logged in';
        return errors;
    }
    //wrong doamin error
    if(err == "false")
    {
        errors.email = 'You are not PUCIT Student';
      return errors;
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrectt password') {
    errors.password = 'That password is incorrect';
  }
    // validation errors
    if (err.message.includes('user validation failed')) {
    
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }

  
    return errors;
  }


app.post("/register",async(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const confirmPass=req.body.confirmPass;
    const userType= req.body.userType;
    const user=new User ({email:email,name:name,password:password,confirmPassword:confirmPass,userType:userType});
    const domain = email.includes("@pucit.edu.pk");
    const Bcheck =email.includes("b",0);
    if(domain && Bcheck)
    {
      console.log("true");
      try
      {
      const user=await User.create({email,password,name,userType});
     res.send("true");
      await user.save();
      }
      catch(err)
      {
          const errors=handleErrors(err);
          res.json({errors});
          console.log(err);
      }
    }
    else{
        //console.log("false");
        //res.send("false");
        const errors=handleErrors("false");
        res.json({errors});
      }
    
});

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'studentAssistantProject', {
    expiresIn: maxAge
  });
};
app.post("/userLogin",async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user1 = await User.login(email, password);
    if(whichUsr == ""){
        try {
            const user = await User.login(email, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            if(user.userType == "student"){
                res.json({ user: user._id, usertype: "student" });
                whichUsr = user._id;
            }
            else if(user.userType == "Staff"){
                res.json({ user: user._id, usertype: "Staff" });
                whichUsr = user._id;
            }
            else if(user.userType == "Admin"){
                res.json({ user: user._id, usertype: "Admin" });
                whichUsr = user._id;
            }
          } catch (err) {
            const errors = handleErrors(err);
            res.json({ errors });
        }
    }
    else{
        const errors = handleErrors("Someone Already Logged in");
        res.json({ errors });
    }
})

app.get("/logout" ,(req,res) =>{
    //res.cookie('jwt','',{maxAge :1});
    whichUsr = "";
    res.send("done");
})
// Sehar backend Code end//

// Ameena backend Code start//

//insert user by admin
app.post("/insertUserByAdmin",async(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const userType=req.body.userType;
    console.log(userType);
    const user=new User({email:email,name:name,password:password,userType:userType});
    try{
        await user.save();
    }catch(err)
    {
        console.log(err);
    }
});

//getting all users
app.get('/getUsers', (req,res) =>{

    User.find({}, (err,result) => {
        if(err)
        console.log(err);
        
        res.send(result);
    })
})

// getting specific user from db
app.get('/getUser/:id', (req,res) =>{
    User.findById(req.params.id, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
    })
})

 // delete User
 app.delete('/deleteUser/:id', (req, res) => {
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        User.findByIdAndRemove(req.params.id).exec();
        res.send("User deleted");
    } catch (err) {
        console.log(err);
    }
});

//Update User
app.put('/updateUser', (req, res) => {
    try {
        User.findById(req.body.id, (err,updatedUser) => {
            updatedUser.name = req.body.name;
            updatedUser.password = req.body.password;
            updatedUser.userType = req.body.userType;
            updatedUser.save();
        });
    } catch (err) {
        console.log(err);
    }
});

// Ameena backend Code end//

// Imran backend Code start//

app.post('/insertclearancereq', (req, res) => {
    const reqfrom = req.body.application;
    const dcc = req.body.DCClearance;
    const sdc = req.body.SecretaryDCClearance;
    const st = req.body.AssistanceTreasurer;
    const lb = req.body.Library;
    const nt= req.body.NetworkAdmin;
    const ec= req.body.ExamCoordinator;
    const pc= req.body.ProgramCoordinator;
    const ml = req.body.MainLibray;
    const hs= req.body.HostelSuperintendent;
    const sac= req.body.StudentAffairsCoordinator;
    const dt= new Date();
    const nam= req.body.UserName;
    const mail=req.body.email;
    
    const clearance = new Clearance ({ 
        form: reqfrom,
        email: mail,
        name: nam,
        dc: dcc,
        seretaryDC : sdc,
        assistanceTreasure : st,
        library: lb,
        networkAdmin: nt,
        examCoordinator: ec,
        programCoordinator: pc,
        mainLibrary : ml,
        hostelSuperintendent: hs,
        studentAffairsCoordinator: sac,
        date: dt,
        //email:req.params.email


        
    }
    );
    clearance.save()
    .then((result) => {
    
        res.send("request send");
        
    })
    .catch((err) => {
        console.log(err);
    })
})


/*
app.get('/getclearancereq', (req,res) =>{
    const myquery = { dc: false,
        seretaryDC:false ,
        assistanceTreasure : false,
        library: false,
        networkAdmin: false,
        examCoordinator: false,
        programCoordinator: false,
        mainLibrary : false,
        hostelSuperintendent: false,
        studentAffairsCoordinator: false
         }

    Clearance.find(myquery, (err,result) => {
        if(err)
        console.log(err);
        
        res.send(result);
    })
})*/

app.get('/getclearancereq', (req,res) =>{
    
    User.findById(whichUsr, (err,result) =>{
        if(err)
        console.log(err);
        else{
            if(result.email == "examcoordinator@staff.edu.pk")
            {
                const myquery = {
                    examCoordinator: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "library@staff.edu.pk")
            {
                const myquery = {
                    library: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "dc@staff.edu.pk")
            {
                const myquery = {
                    dc: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "seretarydc@staff.edu.pk")
            {
                const myquery = {
                    seretaryDC: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "assistancetreasure@staff.edu.pk")
            {
                const myquery = {
                    assistanceTreasure: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "networkadmin@staff.edu.pk")
            {
                const myquery = {
                    networkAdmin: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "programcoordinator@staff.edu.pk")
            {
                const myquery = {
                    programCoordinator: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "mainlibrary@staff.edu.pk")
            {
                const myquery = {
                    mainLibrary: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "hostelsuperintendent@staff.edu.pk")
            {
                const myquery = {
                    hostelSuperintendent: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
            else if(result.email == "studentaffairscoordinator@staff.edu.pk")
            {
                const myquery = {
                    studentAffairsCoordinator: false
                     }
                     Clearance.find(myquery, (err,result) => {
                        if(err)
                        console.log(err);
                        
                        res.send(result);
                    })

            }
        } 
    })
})

//delete request
app.delete("/deleteClreanceReq/:id", (req, res) => {
    Clearance.findById(req.params.id ,(err,result) =>{
        if(err){
            console.log(err);
        }
        else
        {
            const nm= result.name;
            const ml= result.email;
            //console.log(result.name);
            //console.log(result.email);
            const rejection = new Rejection({

                name: nm,
                studntemail: ml,
                
    
             }
             );
            rejection.save()
            .catch((err) => {
            console.log(err);
            })

            
           
        }
    })


    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        Clearance.findByIdAndRemove(req.params.id).exec();
        res.send("Request Deleted");
    } catch (err) {
        console.log(err);
    }
});

app.get("/usrCheckForReq", (req,res) => {
    User.findById(whichUsr, (err,result) =>{
        if(err)
        console.log(err);
        else{
            const myquery = {
                email: result.email
                 }
                 Clearance.find(myquery, (err,result) => {
                    if(err)
                    console.log(err);
                    else
                    res.send(result);
                }) 
        }
    })
})

app.put("/updateReq/:id" ,(req,res) =>{
    try {
        Clearance.findById(req.params.id, (err,updatedStatus) => {
            User.findById(whichUsr, (err,result) =>{
                if(err)
                    console.log(err);
                    else{
                        if(result.email == "examcoordinator@staff.edu.pk")
                        {
                            updatedStatus.examCoordinator = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        }
                        else if(result.email == "dc@staff.edu.pk")
                        {
                            updatedStatus.dc = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email ==   "seretarydc@staff.edu.pk"    )
                        {
                            updatedStatus.seretaryDC = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "networkadmin@staff.edu.pk")
                        {
                            updatedStatus.networkAdmin = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "programcoordinator@staff.edu.pk")
                        {
                            updatedStatus.programCoordinator = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "assistancetreasure@staff.edu.pk")
                        {
                            updatedStatus.assistanceTreasure = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "mainlibrary@staff.edu.pk")
                        {
                            updatedStatus.mainLibrary = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "hostelsuperintendent@staff.edu.pk")
                        {
                            updatedStatus.hostelSuperintendent= true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "studentaffairscoordinator@staff.edu.pk")
                        {
                            updatedStatus.studentAffairsCoordinator= true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                        else if(result.email == "library@staff.edu.pk")
                        {
                            updatedStatus.library = true;
                            updatedStatus.save();
                            res.send("updateStatus");
                        } 
                    }    
            })
        })
    }
    catch (err) {
        console.log(err);
    }
})
 
app.get("/getUserInfo" ,(req,res) =>{
    User.findById(whichUsr, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
    })
});


//get clreance status at student side
app.get('/getclearancestatus' ,(req,res) =>{
    User.findById(whichUsr, (err,result) =>{
        if(err)
        console.log(err);
        else{
            const myquery = {
                email: result.email
                 }
                 Clearance.find(myquery, (err,result) => {
                    if(err)
                    console.log(err);
                    else
                    res.send(result);
                })

        }
    })
});


app.get('/getRejectClearncedata' ,(req,res) =>{
    User.findById(whichUsr, (err,result) =>{
        if(err)
        console.log(err);
        else{
            //console.log(result.email);
            const myquery = { studntemail: result.email }
                    Rejection.findOne(myquery, (err,result) => {
                    if(err)
                    console.log(err);
                    else
                    res.send(result);
                })

        }
    })

});


//delte reject clearance data
app.delete("/deleteRejectClearance", (req, res) => {
    User.findById(whichUsr, (err,result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            try {
                mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
                Rejection.findOneAndRemove(result.email).exec();
                res.send("Data deleted");
            } catch (err) {
                console.log(err);
            }

        }
    })
    
});
// Imran backend Code end//