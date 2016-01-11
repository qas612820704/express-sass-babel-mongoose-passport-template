var should = require("should");
var mongoose = require('mongoose');
var Q = require('q');
var AccountInfo = require("../models/account");
var Account = AccountInfo.Account;
var Profile = AccountInfo.Profile;
var Sign = AccountInfo.Sign;
var School = AccountInfo.School;
var db;

describe('Account', function() {

    before(function(done) {
        db = mongoose.connect('mongodb://localhost:20000/skateForum');
            done();
    });

    after(function(done) {
        mongoose.connection.close();
        done();
    });

    beforeEach(function(done) {
        var school = new School({
            schoolName: "NCHU",
        });

        var sign = new Sign({
            content: "I am handsome",
        });

        var profile = new Profile({
            name: 'Bo-Ting Chiang',
            nick: 'Lego',
            school: school._id,
            grade: 5,
        });
        profile.signs.push(sign._id);
        var account = new Account({
            username: 'people',
            password: 'testy',
            profile: profile._id,
        });

        school.save(function(error) {
          if (error) console.log('error' + error.message);
            else console.log('no error');
          sign.save(function(error) {
            if (error) console.log('error' + error.message);
            else console.log('no error');
            profile.save(function(error) {
              if (error) console.log('error' + error.message);
              else console.log('no error');
              account.save(function(error) {
                if (error) console.log('error' + error.message);
                else console.log('no error');
                done();
              });
            })
          });
        });
    });

    it('find a user by username', function(done) {
        Account.findOne({ username: 'people' },
          function(err, account) {
            account.username.should.eql('people');
            console.log("   username: ", account.username);
            done();
        });
    });
    it('get all profile from account', function(done) {
      Account
      .findOne({username: 'people'})
      .populate({
        path:'profile',
        model:'Profile',
        populate:[
          {
            path:'school',
            model:'School'
          },
          {
            path:'signs',
            model:'Sign'
          }
        ]
      })
      .exec(function(err,account){
        var profile = account.profile;
        profile.name.should.eql('Bo-Ting Chiang');
        profile.nick.should.eql('Lego');
        profile.grade.should.eql(5);
        profile.school.schoolName.should.eql('NCHU');
        profile.signs[0].content.should.eql('I am handsome');
        done();
      })
    });

    afterEach(function(done) {
      Account.remove({username: 'people'}, function() {
        Profile.remove({}, function() {
          Sign.remove({}, function() {
            School.remove({}, function() {
              done();
            });
          });
        });
      });
    });

});
