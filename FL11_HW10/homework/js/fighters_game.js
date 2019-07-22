class Fighter {
    constructor(object) {
      let name = object.name;
      this.getName = function () { 
          return name; 
        }
  
      let damage = object.damage;
      this.getDamage = function () { 
          return damage; 
        }
  
      let health = object.hp;
      this.getHealth = function () { 
          return health; 
        }
      this.setHealth = function (healthAmount) { 
          health = healthAmount; 
        }
  
      let agility = object.agility;
      this.getAgility = function () { 
          return agility; 
        }
  
      this.totalHealth = object.hp;
      this.wins = 0;
      this.losses = 0;
    }
  
    attack(defender) {
      const multiplier = 101;   
      const randomNumber = Math.floor(Math.random() * multiplier);
      if (randomNumber > defender.getAgility()) {
        if (defender.dealDamage(this.getDamage()) === 0) {
          this.addWin();
        }
        console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName());
      } else {
        console.log(this.getName() + ' attack missed');
      }
    }
  
    logCombatHistory() {
      console.log('Name: ' + this.getName() + ', Wins: ' + this.wins + ', Losses: ' + this.losses);
    }
  
    heal(healthAmount) {
      this.setHealth(this.getHealth() + healthAmount);
      if (this.getHealth() > this.totalHealth) {
        this.setHealth(this.totalHealth);
      }
    }
  
    dealDamage(healthAmount) {
      if (this.getHealth() > healthAmount) {
        this.setHealth(this.getHealth() - healthAmount);
      } else {
        this.setHealth(0);
        this.addLoss();
      }
      return this.getHealth();
    }
  
    addWin() {
      this.wins++;
    }
  
    addLoss() {
      this.losses++;
    }
  }
  
  function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() <= 0) {
      console.log(firstFighter.getName() + " is dead and can't fight");
    } else if (secondFighter.getHealth() <= 0) {
      console.log(secondFighter.getName() + " is dead and can't fight");
    } else {
      firstFighter.attack(secondFighter);
      if (firstFighter.getHealth() === 0 || secondFighter.getHealth() === 0) {
        return;
      }
      battle(secondFighter, firstFighter);
    }
  }
  
  
  let myFighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
  let myFighter2 = new Fighter({name: 'Bob', damage: 10, hp: 120, agility: 40});
  battle(myFighter1, myFighter2);